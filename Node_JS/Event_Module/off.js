const EventEmitter = require("events");
const event = new EventEmitter()

function greet() {
    console.log("Greeting of the day")
}

event.on("greet", greet)
event.off("greet", greet)