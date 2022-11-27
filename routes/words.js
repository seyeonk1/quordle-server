var express = require('express');
var router = express.Router();
const db = require('../database');

/* GET words listing. */
router.get('/', function(req, res, next) {
  res.setHeader('Access-Control-Allow-origin', 'http://localhost:63342');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  const words = []
  db.all(`SELECT * FROM words ORDER BY RANDOM() LIMIT 4`, (err, rows) => {
    if(err) {
      throw err
    }
    rows.forEach((row) => {
      console.log(row.word)
      words.push(row.word)
    })
    res.send(words)
  })
});

module.exports = router;
