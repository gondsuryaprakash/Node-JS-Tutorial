const EventEmmitter=require('events')
const event=new EventEmmitter()
event.on('sayMyName',()=>{
    console.log("sp");
})
event.emit('sayMyName')
