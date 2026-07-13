const EventEmitter = require("events")
const event = new EventEmitter()

event.on("greet", () => {
    console.log("Greetings of the day!")
})

event.emit("greet")

// # Passing data
event.on("user", (name, age) => {
    console.log(name);
    console.log(age)
})

event.emit("user", "Rahmat", 21)

// # Multiple listner
event.on("orderPlaced", () => {
    console.log("Update Inventory")
})

event.on("orderPlaced", () => {
    console.log("Send Email")
})

event.on("orderPlaced", () => {
    console.log("Generate Invoice")
})

event.emit("orderPlaced")