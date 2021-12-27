const mongoose=require ("mongoose")
var registrationSchema=mongoose.Schema({
    fname: String,
    lname:String,
    email: String,
    phNo: String,
    password:String

})
const registration=mongoose.model("Registration", registrationSchema);
module.exports=registration;