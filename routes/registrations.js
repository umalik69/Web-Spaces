var express = require('express');
var router = express.Router();
var checkSessionAuth= require("../middlewares/checkSessionAuth");
const registration = require('../models/registrations');
/* GET home page. */
router.get('/',async function(req, res, next) {
  let regis= await registration.find();
res.render('registrations/registrations',{title: "Registrations", regis:regis});
});

router.post('/json',async function(req, res, next) {
  let regis=new registration(req.body); 
  await regis.save();

  });

module.exports = router;
