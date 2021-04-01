var events = require('events');
var eventEmitter = new events.eventEmitter();

//Create an event handler
var myEventHandler = function () {
    console.log('I hear a scream!');
}

//Assign the above event handler to a specific event
eventEmitter.on('scream', myEventHandler);

//Fire the event handler "scream"
eventEmitter.emit('scream');