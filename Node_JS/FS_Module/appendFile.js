const fs = require("fs");

// # asynchronous
fs.appendFile("demo.txt", "\nHello world", "utf-8", (err) => {
    if(err){
        console.log(err)
        return
    }
    console.log("Data added")
})

// # synchronous
fs.appendFileSync("demo.txt", "\nHello World2!")
console.log("Data added by synchronous method")