const fs = require("fs");

// # asynchronous
fs.writeFile("writeFile.txt", "Creating file with content", "utf-8", (err) => {
    if(err){
        console.log(err)
        return;
    }
    console.log("File Created Successfully")
})

// # synchronous
fs.writeFileSync("writeFile.txt", "Data replaced", "utf-8")
console.log("File created successfully")