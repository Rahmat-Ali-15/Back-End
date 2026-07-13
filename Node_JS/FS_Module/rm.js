const fs = require("fs")
fs.rm("New Folder", { recursive: true }, (err) => {
    if(err){
        console.log(err)
        return
    }
    console.log("Folder Deleted Successfully")
})