const mongoose=require ("mongoose")
var courseSchema=mongoose.Schema({
    name: String,
    dur: String
})
const Course=mongoose.model("Course", courseSchema);
module.exports=Course;