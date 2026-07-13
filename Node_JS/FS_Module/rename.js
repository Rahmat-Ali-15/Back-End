const fs = require("fs");
fs.rename("demo.txt", "renameDemo.txt", (err) => {
    if(err){
        console.log(err)
        return
    }
    console.log("File renamed")
})