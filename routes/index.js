const express = require('express');
const router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', (req, res, next) => {
    res.send('hi')
});

module.exports = router;
