var os =require('os')

//To get the OS Architecutre
console.log(os.arch());

//To get the Free Memory
const fm=os.freemem()
console.log(fm);
console.log(`In GB =${fm/1024/1024/1024}`);
// To get the HomeDir


//Total Memory

const totalMemory=os.totalmem()
console.log(totalMemory/1024/1024/1024);

const homeDir=os.homedir()
console.log(homeDir);

