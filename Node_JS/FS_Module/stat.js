const fs = require("fs")
fs.stat("demo.txt", (err, stat) => {
    if(err){
        console.log(err)
        return
    }
    console.log(stat)
})