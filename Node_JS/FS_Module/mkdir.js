const fs = require("fs");
fs.mkdir("New Folder", (err) => {
    if(err){
        console.log(err)
        return
    }
    console.log("New File created Successfully")
})