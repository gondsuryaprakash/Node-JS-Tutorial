const { response } = require("express");
const http=require("http")
const server=http.createServer((req,res)=>{

    if(req.url=='/')
    {
        res.end("Hello from the other side")
        console.log('/');
        res.write()
    }
    else if(req.url=='/about')
    {
        res.end("Welcome form about us side")
        console.log('/');
    }

    else if(req.url=='/home')
    {
        res.end("Welcome from the home side")
        console.log('/');
    }
    else{
        res.writeHead(404,{"Content-type":"text/html"})
        res.end("<h1>Error 404 ! Page Does not exixt !!</h1>")
       
    }
})
server.listen(8081,'127.0.0.1',()=>{console.log("listening");})

