const express = require("express")
const app = express();
const port = process.env.PORT || 3000; 
const catchAsyncError = require("../catchAsyncError")


require("./db/conn")

const Register = require("./models/projectModel")
const path = require("path");
// const catchAsyncError = require("../catchAsyncError");
const static_path = path.join(__dirname , "../")
app.use(express.static(static_path))

// app.get("/" , (req , res)=>{
//     res.send("working")
// })

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.post("/register" , async (req , res)=>{
    try{
        const projectNo = req.body.projectNo;
        const projectName = req.body.projectName;
        const client = req.body.client;
        const startingDate = req.body.startingDate;
        const completionDate = req.body.completionDate;
        const registerProject = new Register({
            projectNo : req.body.projectNo,
            projectName:req.body.projectName,
            client:req.body.client,
            startingDate:req.body.startingDate,
            completionDate:req.body.completionDate
        })

       const registered = await registerProject.save();
       res.status(201);
    }
    catch(err){
        res.status(400).send(err);
    }
})


app.listen(port , ()=>{
    console.log(`server is running at http://localhost:${port}`);
})