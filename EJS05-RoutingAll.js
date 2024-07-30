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
//http:localhost:700/contact
app.get("/contact",(req,res)=>{
    res.send("Hello from contact page")
})
//http:localhost:700/home
app.get("/home",(req,res)=>{
    res.send("Hello from home page")
})
app.listen(port,()=>{
    console.log("Running on port 2000")
})
