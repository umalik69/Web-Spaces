var express = require('express');
var router = express.Router();
var checkSessionAuth= require("../middlewares/checkSessionAuth");
const registration = require('../models/registrations');
/* GET home page. */
router.get('/',async function(req, res, next) {
  let registrations= await registration.find();
res.render('registrations/registrations',{title: "Registrations", registrations:registrations});
});

router.post('/json',async function(req, res, next) {
  let registrations=new registration(req.body); 
  await registrations.save();

  });

module.exports = router;
