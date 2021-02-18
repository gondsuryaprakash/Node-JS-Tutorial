const fs=require('fs')

//Creating file system 

//fs.writeFileSync('read.text','welcome Surya')

//fs.writeFileSync('read.text','Surya is Don !!')


//Update the file System 

//fs.appendFileSync('read.text'," Surya is Don")


//Read the File 



// const buffData=fs.readFileSync('read.text').toString()
// console.log(buffData)


//Asynchronus Read 

// const rea_async=fs.readFile('read.text',(err,data)=>{
//     if(err){
//         throw err
//     }
//     console.log('Asynchronus Call '+ data.toString());
// })


//Open File 


// fs.open('read.text','r+',(err, fd)=>{

//     if (err)
//     {
//         throw err
//     }
//     const read_data=fd.toString()
//     console.log(read_data);


//     console.log('Opne Successfully')
// })

//Thapa Challenge

// //create new file 
// fs.writeFileSync('thapa.txt','Hi thapa welcome to the new world')

// //Read the file 
const read_data=fs.readFileSync('surya.txt','utf8')

console.log(read_data);
console.log("Read Successfull");

// //Rename the file 
// fs.rename('thapa.txt','surya.txt',(err)=>{
//     if (err)
//     { 
//         throw err
//     }
//     console.log("Rename Successfull")
// })


// // Append the file 

// fs.appendFileSync('surya.txt',"Surya you are great bro")
// console.log("Append Succesful");


//Delete 

