const express = require('express');
const router = express.Router();
const controllers = require('./../controllers/controllers');

router.post('/ahoy-there', controllers.ahoyThere);

module.exports = router;