var express = require('express');
var router = express.Router();
var connection = require('../config/connection.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  connection.query("SELECT * FROM burgers WHERE devoured = false;", function (err, newBurgers) {
    connection.query("SELECT * FROM burgers WHERE devoured = true;", function (err, devouredBurgers) {
      res.render("main", { 'newBurgers': newBurgers, 'devouredBurgers': devouredBurgers });
    })
  });
});

router.post('/createburger', function (req, res) {
  console.log('now creating a burger')
  connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.burger_name], function (err, result) {
    if (err) throw err;
    res.json({ message: 'successfully created a burger' });
  })
});

router.put('/updateburger', function (req, res) {
  var now = new Date(Date.now())
  connection.query("UPDATE burgers SET devoured = ?, date_eaten = ? WHERE burger_name = ?", [
    true, now, req.body.burger_name
  ], function (err, result) {
      res.json({ message: 'successfully updated a burger' });
  });
});

//module.exports = updateBurger;
//module.exports = createBurger;
module.exports = router;
