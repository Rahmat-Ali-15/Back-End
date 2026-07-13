const fs = require("fs")
fs.copyFile("demo.txt", "demo/demo.txt", (err) => {
    if(err){
        console.log(err)
        return
    }
    console.log("File copied")
})