var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./db/test.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
      console.log(err);
  } else {
      console.log('success');
  }
});

router.get('/api/user', function (req, res, next) {
  const sql = `SELECT * FROM person`;
  db.serialize();
  db.get(sql, (err, row)=>{
    if(err) {
      console.error(err.message);
    }
    res.json({
      "message":"success",
      "data":row
  })
  })
});

module.exports = router;