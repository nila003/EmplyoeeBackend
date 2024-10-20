const mongoose= require("mongoose");
const employeeSchema= mongoose.Schema({
    name: String,
    position: String,
    department: String,
    salary: Number
});
const employeeModel= mongoose.model('employee',employeeSchema);
module.exports=employeeModel;
