const fs = require("fs")

// # asynchronous
fs.readFile("demo.txt", "utf-8", (err, data) => {
    if(err){
        console.log(err)
        return;
    }
    console.log(data)
})

// # synchronous
const data = fs.readFileSync("demo.txt", "utf-8")
console.log("🚀 ~ data:", data);
