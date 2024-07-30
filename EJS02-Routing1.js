var myexpress=require("express");
var app=myexpress()

var port=700;
//http:localhost:700
app.get("/",(req,res)=>{
    res.send("Hello from ExpressJS")
})
//http:localhost:700/about
app.get("/about",(req,res)=>{
    res.send("Hello from about page")
});
app.listen(port,()=>{
    console.log("Running on port 2000")
})
