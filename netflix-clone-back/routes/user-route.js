const express = require('express');

const userController = require('../controllers/user-controller');
const verify = require('../middleware/verify-token');

const router = express.Router();

router.put('/:id', verify, userController.update);

module.exports = router;