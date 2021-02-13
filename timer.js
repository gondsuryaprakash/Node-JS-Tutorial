/*
setImmediate(): It is used to execute setImmediate.
setInterval(): It is used to define a time interval.
setTimeout(): ()- It is used to execute a one-time callback after delay milliseconds.
*/


// setInterval(function() {  
//     console.log("setInterval: Hey! 1 millisecond completed!..");   
//    }, 3000);  


setTimeout(function(){
console.log("setTimeOut: Hi !! is Surya")
},1000)

function getTimer()
{
   var i=0
   var min=0
   var hour=0
   setInterval(() => {
       i++
       if(i==60)
       {
           i=0
           min++
           if(min==60)
           {
               min=0
               hour++
           }
       }
       console.log(`${hour} : ${min} :${i}`) 
   }, 1000);



}

getTimer()