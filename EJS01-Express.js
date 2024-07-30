var express=require("express");
var app=express();


var port=2000;
app.get('/',(req,res)=>{
    res.send("Hello world from ExpressJS")
})
app.listen(port,()=>{
    console.log("Running on port 2000")
})