const express=require("express");
const app=express();
const port=2000;
app.use(express.static('public'))
app.listen(port,()=>{
        console.log("Server running at 2000 port")
})