const express = require('express');

const movieController = require('../controllers/movie-controller');
const verify = require('../middleware/verify-token');

const router = express.Router();

router.get('/find/:id', verify, movieController.get);
router.get('/random', verify, movieController.getRandom);
router.post('/', verify, movieController.create);
router.put('/:id', verify, movieController.update);
router.delete('/:id', verify, movieController.delete);

module.exports = router;