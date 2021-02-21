const bioData=
{
    name:"Surya Prakash",
    age:"27",
    add:"Vill Rampurmeer Post Paternegwa Dist Maharajganj ",
    
}


//Method to convert object to JSON 
const jsonData=JSON.stringify(bioData)
const objData=JSON.parse(jsonData)

console.log(jsonData);
console.log(objData.name);