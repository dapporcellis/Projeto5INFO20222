const express = require('express');
const router = express.Router();

const publicController = require('../controller/publicController')

router.get('/',publicController.abreindex)

module.exports = router