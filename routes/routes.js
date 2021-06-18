const express = require('express');
const router = express.Router();
const controllers = require('./../controllers/controllers');

router.post('/get-email', controllers.getEmail);

module.exports = router;