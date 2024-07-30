const http=require('http');
const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>ExpressJS Framework</title></head>');
    res.write('<body><h2>Hello from Node.js server!!</h2></body>');
    res.write('</html>')
    res.end()
});
server.listen(5000,()=>{
    console.log("Server is running at port 5000");
})