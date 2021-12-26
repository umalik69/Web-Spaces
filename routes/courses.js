var express = require('express');
var router = express.Router();
var Course=require("../models/courses")
var checkSessionAuth= require("../middlewares/checkSessionAuth")

/* GET home page. */
router.get('/',checkSessionAuth,async function(req, res, next) {
    let courses= await Course.find();
    console.log(courses);
  res.render('courses/courses',{title: "Courses", courses:courses});
});
router.get('/add',checkSessionAuth,async function(req, res, next) {
  
res.render('courses/addC');
});
router.post('/add',async function(req, res, next) {
  let course=new Course(req.body); 
  await course.save();
  res.redirect('/courses');
  });
  router.get('/delete:id',async function(req, res, next) {
    let courses = await Course.findByIdAndDelete(req.params.id)
    res.redirect("/courses")
    });
    router.get('/edit/:id',async function(req, res, next) {
      let courses = await Course.findById(req.params.id)
      res.render("courses/edit",{courses})
     
      });
      router.post('/edit/:id',async function(req, res, next) {
        let courses = await Course.findById(req.params.id)
        courses.name=req.body.name;
        courses.dur=req.body.price;
        await courses.save();
        res.redirect("/courses")
       
        });
module.exports = router;
