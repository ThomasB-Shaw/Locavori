const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 makes a post request to tbl_favorites and adds a 
 favorite to DB via profile ID on MakerId
 **/
router.post('/:id', (req, res) => {
    const makerId = Number(req.params.id);
    const profileId = req.user.id; 

  queryText = `INSERT INTO "tbl_favorites" ("profile_id", "maker_id") VALUES($1, $2);`;
  pool.query(queryText, [profileId, makerId])
    .then(() => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('ERROR in Favorite post:', error);
        res.sendStatus(500);
    });
});

/**
 makes a get request from tbl_favorites and shows all table favorites and
 the makers info
 **/
router.get('/', (req, res) => {
    const userId = req.user.id;
    const queryText = `SELECT * FROM "tbl_favorites"
    JOIN "tbl_artisans" ON "tbl_favorites"."maker_id" = "tbl_artisans"."id"
    WHERE "tbl_favorites"."profile_id" = $1;`;
    pool.query(queryText, [userId])
        .then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log('ERROR in get favorites', error);
            res.sendStatus(500);
        });
});

/**
makes a delete request to tbl_favorites to remove favorites on specific maker_id
 **/
router.delete('/:id', (req, res) => {
        const queryText = `DELETE FROM "tbl_favorites" WHERE "maker_id" = $1;`
        pool.query(queryText, [req.params.id])
          .then((results) => res.sendStatus(200))
          .catch(() => res.sendStatus(500));
      });
      


module.exports = router;