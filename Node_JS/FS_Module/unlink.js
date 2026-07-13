const fs = require("fs")

fs.unlink("demo.js", (err) => {
    if(err){
        console.log(err)
        return
    }
    console.log("File deleted successfully")
})