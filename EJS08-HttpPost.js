const express=require("express");
const app=express();
const port=3000;
app.use(express.json());
app.post("/User",(req,res)=>{
    res.send(`Hello, ${req.body.name}`)
})
app.listen(port,()=>{
    console.log("Running on port 3000")
})