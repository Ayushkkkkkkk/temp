const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost:27017/Engineeringprojects",{useNewUrlParser:true , useUnifiedTopology:true}).then(()=>{
    console.log("Database Connection sucessful");
}).catch((err)=>console.log(err));