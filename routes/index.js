//PASO 4_BIS:

const express = require('express');
const router = express.Router();
const postRoutes = require('./post');

router.use('/', postRoutes);

module.exports = router;