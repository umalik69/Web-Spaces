var express = require('express');
var router = express.Router();
var lead=require("../models/queries")
var checkSessionAuth= require("../middlewares/checkSessionAuth")

router.get('/json',async function(req, res, next) {
    let leads= await lead.find();
  res.send(leads);
});
router.get('/',async function(req, res, next) {
    let leads= await lead.find();
    console.log(leads);
 res.render('queries/queries',{title: "Courses", leads:leads});
});
router.post('/json',async function(req, res, next) {
    let leads=new lead(req.body); 
    await leads.save();

    });
module.exports = router;
