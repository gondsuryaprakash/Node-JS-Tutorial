const fs=require('fs')
const http=require('http')
const server =http.createServer()
server.on('request',(req,res)=>{



    // fs.readFile('input.txt',(err,data)=>{

    //     if(err)
    //     {
    //         console.log(err);
    //     }
    //     res.end(data.toString())
    // })


    //Streaming way

    rstream=fs.createReadStream('input.txt')
    rstream.on('data',(chunkData)=>{
        res.write(chunkData)
    })
    rstream.on('end',()=>{

        res.end()
    })

    rstream.on('error',(err)=>{
        console.log(err);
        res.end("File not found")
    })

   

})

server.listen(8081,'127.0.0.1')