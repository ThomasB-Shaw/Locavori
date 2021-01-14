const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


//gets a specific favorite and compares based on which 
// one was clicked
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "tbl_favorites"
    WHERE "tbl_favorites"."profile_id" = $1;`;
    pool.query(queryText, [req.user.id])
        .then((result) => {
            console.log('Result from favorite get', result.rows);
            
            res.send(result.rows);
        }).catch((error) => {
            console.log('ERROR in get favorites', error);
            res.sendStatus(500);
        });
});

module.exports = router;