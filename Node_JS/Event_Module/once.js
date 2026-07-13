const EventEmitter = require("events")
const event = new EventEmitter()

event.once("greet", () => {
    console.log("Greeting of the day")
})

event.emit("greet");
event.emit("greet");
event.emit("greet");