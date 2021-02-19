const fs=require('fs')
const { json } = require("body-parser")

const bioData=
{
    name:"Surya Prakash",
    age:"27",
    add:"Vill Rampurmeer Post Paternegwa Dist Maharajganj ",   
}


const jsonDAta=JSON.stringify(bioData)
const objData=JSON.parse(jsonDAta)


fs.writeFile('json1.json',jsonDAta,(err)=>{console.log(err);})

fs.readFile('json1.json','utf-8',(err,data)=>{
    if(err)
    {
        console.log(err);
    }
    console.log(data);

})

