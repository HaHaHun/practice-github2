var express = require('express');
var router = express.Router();

router.get('/', function(req,res) {
  res.render('login', {title: "hell"});
});

router.post('/', function(req, res, next) {
  var id = req.body.id;
  console.log(id);
  var pw = req.body.passwd;
  console.log(pw);
});

module.exports = router;
