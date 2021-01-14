const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  // console.log('req.user',req.user);
  
  res.send(req.user);
});

// Registration as a locavore
// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const birthDate = req.body.birthDate
  const email = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  
  

  const queryText = `INSERT INTO "tbl_profile" (first_name, last_name, birth_date, email, password)
    VALUES ($1, $2, $3, $4, $5) RETURNING id`;
  pool
    .query(queryText, [firstName, lastName, birthDate, email, password])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('User registration failed: ', err);
      res.sendStatus(500);
    });
});

// Registration as a maker
// Similar post to the one above, but a transaction that returns a user id
// and creates a new maker referencing that id
router.post('/registerMaker', async (req, res, next) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const birthDate = req.body.birthDate
  const email = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  
  
  const connection = await pool.connect();
  try {
    await connection.query('BEGIN');
    const profileQueryText = `INSERT INTO "tbl_profile" (first_name, last_name, birth_date, email, password)
                              VALUES ($1, $2, $3, $4, $5) RETURNING id`;
    
    const result = await connection.query(profileQueryText, [firstName, lastName, birthDate, email, password])
    const userId = result.rows[0].id
    const makerQueryText = `INSERT INTO "tbl_artisans" (profile_id, first_name, last_name)
                            VALUES ($1, $2, $3);`;
    await connection.query(makerQueryText, [userId, firstName, lastName]);
    await connection.query('COMMIT');
    res.sendStatus(200);
  } catch (error) {
    await connection.query('ROLLBACK');
    console.log('Register as maker error - rolling back new maker', error);
    res.sendStatus(500);
  } finally {
    connection.release();
  }
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
