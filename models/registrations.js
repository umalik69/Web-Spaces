const mongoose=require ("mongoose")
var courseSchema=mongoose.Schema({
    fname: String,
    lname:String,
    email: String,
    password:String

})
const Course=mongoose.model("Course", courseSchema);
module.exports=Course;