const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('WaterOverflow',() => {
    console.log("STOP IT ")
})

myEmitter.emit("WaterOverflow")