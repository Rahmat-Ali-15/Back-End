const EventEmitter = require("events")
const event = new EventEmitter()

event.on("login", () => {
    console.log("Login Performed")
})