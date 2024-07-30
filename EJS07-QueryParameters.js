const express=require("express");
const app=express();
const port=500;

app.get("/search",(req,res)=>{
    const query=req.query.q
    res.send(`USER ID: ${query}`)
});
app.listen(port,()=>{
    console.log("Running on the port 9000")
})
