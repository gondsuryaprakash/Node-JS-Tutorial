var  fs=require('fs')
var dataStream=fs.createReadStream('read.text')
dataStream.setEncoding('UTF8')

var data=''

dataStream.on('data',(chunk)=>{
    data+=chunk
})
dataStream.on('end',()=>{
    console.log(data)
})