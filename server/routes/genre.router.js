const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/:id", (req, res) => {
  console.log(req.body);
  const movieId = [req.params.id];

  const sqlText = `
SELECT  "movies".id AS "movie_id", "genres".id AS "genre_id", "genres"."name" AS "genre_name" FROM "movies"
JOIN "movies_genres" ON "movies"."id" = "movies_genres".movie_id
JOIN "genres" ON "movies_genres".genre_id = "genres".id
WHERE "movies".id = $1;
  `;

  pool
    .query(sqlText, movieId)
    .then((result) => {
      console.log("movie information is:", result.rows);
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("Error geting movie details:", err);
      res.sendStatus(500);
    });
});

module.exports = router;
