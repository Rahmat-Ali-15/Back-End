const EventEmitter = require("events")
const event = new EventEmitter()

event.on("greet", () => {
    console.log("Good Morning")
})
event.on("greet", () => {
    console.log("Good After noon")
})

console.log(event.listeners("greet"));