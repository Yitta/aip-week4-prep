const express = require('express');
const moviesJson = require('../data/movies.json');

const router = express.Router();

function getMovieById(id) {
  return moviesJson.filter((movie) => {
    return movie.id == id;
  })[0];
}

/* GET all of the movies. */
router.get('/', (req, res) => {
  res.json(moviesJson);
});

/* POST a new movie. */
router.post('/', (req, res) => {
  res.json(moviesJson);
});

/* GET the movie with :id. */
router.get('/:id', (req, res) => {
  res.json(getMovieById(req.params.id));
});

/* PUT the movie with :id. */
router.put('/:id', (req, res) => {
  res.json(getMovieById(req.params.id));
});

/* DELETE the movie with :id. */
router.delete('/:id', (req, res) => {
  res.json(getMovieById(req.params.id));
});

module.exports = router;
