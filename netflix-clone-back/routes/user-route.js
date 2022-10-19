const express = require('express');

const userController = require('../controllers/user-controller');
const verify = require('../middleware/verify-token');

const router = express.Router();

router.get('/', verify, userController.getAll);
router.get('/stats', userController.stats);
router.get('/find/:id', userController.getUser);
router.put('/:id', verify, userController.update);
router.delete('/:id', verify, userController.delete);

module.exports = router;