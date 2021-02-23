const http=require('http')
const fs=require('fs')


http.createServer((req,res)=>{

    const rsStream=fs.createReadStream('input.txt')

    rsStream.pipe(res)

    
}).listen(8081)