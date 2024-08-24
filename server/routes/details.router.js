const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.get('/:id', (req, res) => {
    const sqlId = [req.params.id]
    const query = `
      SELECT * FROM "movies"
        WHERE "movies".id = $1;
    `;

    pool.query(query, sqlId)
      .then(result => {
        res.send(result.rows);
      })
      .catch(err => {
        console.log('ERROR: Get all movies', err);
        res.sendStatus(500)
      })
  
  });

  module.exports = router;