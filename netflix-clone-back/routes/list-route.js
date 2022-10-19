const express = require('express');

const verify = require('../middleware/verify-token');
const listController = require('../controllers/list-controller');

const router = express.Router();

router.get('/', verify, listController.get);
router.post('/', verify, listController.create);
router.delete('/:id', verify, listController.delete);

module.exports = router;