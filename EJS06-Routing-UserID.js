const express=require("express");
const app=express();
const port=9000;

app.get("/user/:id",(req,res)=>{
    res.send(`USER ID: ${req.params.id}`)
});
app.listen(port,()=>{
    console.log("Running on the port 9000")
})
