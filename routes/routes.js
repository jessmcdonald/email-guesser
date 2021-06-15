const express = require('express');
const router = express.Router();
const controllers = require('./../controllers/controllers');

router.get('/ahoy-there', controllers.ahoyThere);

module.exports = router;