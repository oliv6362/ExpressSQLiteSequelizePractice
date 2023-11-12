var express = require('express');
var router = express.Router();
const { User } = require("../models")

/* GET users listing. */
router.get('/', async function(req, res) {
  try {
    const users = await User.findAll();
    res.render("users", { title: 'List of Users' ,users });
  }
  catch (e) {
    console.log(e);
    res.status(500).send("Error occurred");
  }
});

module.exports = router;
