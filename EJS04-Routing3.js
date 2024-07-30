var myexpress=require("express");
var app=myexpress()

var port=700;
//http:localhost:700/home
app.get("/home",(req,res)=>{
    res.send("Hello from home page")
})
app.listen(port,()=>{
    console.log("Running on port 2000")
})
