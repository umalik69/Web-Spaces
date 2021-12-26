const mongoose=require ("mongoose")
var leadSchema=mongoose.Schema({
    fname: String,
    lname:String,
    email: String,
    phNo:String,
    msg:String

})
const lead=mongoose.model("lead", leadSchema);
module.exports=lead;