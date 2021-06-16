const express = require('express');
const router = express.Router();
const controllers = require('./../controllers/controllers');

router.post('/ahoy-there', controllers.ahoyThere);
router.get('/email-address', controllers.getEmail);

module.exports = router;