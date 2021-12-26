var express = require('express');
var router = express.Router();
var lead=require("../models/queries")
var checkSessionAuth= require("../middlewares/checkSessionAuth")

router.get('/',checkSessionAuth,async function(req, res, next) {
    let leads= await lead.find();
    console.log(leads);
 res.render('queries/queries',{title: "Courses", leads:leads});
});
module.exports = router;
