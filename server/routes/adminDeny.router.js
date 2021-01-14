const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


//this allows admin to deny individual maker and deletes them 
//from pending requets

router.delete('/:id', (req, res) => {
    const queryText = `
    DELETE FROM "tbl_artisans"
    WHERE "profile_id" = $1;`;
    pool.query(queryText, [ req.params.id])
      .then((result) => {
        res.sendStatus(200)
      }).catch((error) => {
        console.log('error in put', error);
        res.sendStatus(500);
      })
  })

  module.exports = router;