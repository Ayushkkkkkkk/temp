const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    projectNo : {
        type : Number,
        required:true
    },
    projectName : {
        type : String,
        required:true,
        unique:true
    },
    client : {
        type:String,
        required:true,
    },
    startingDate : {
        type : Date,
        required:true
    },
    completionDate : {
        type : Date,
        required:true
    }

})


const Register = new mongoose.model("Register" , projectSchema);


module.exports = Register;