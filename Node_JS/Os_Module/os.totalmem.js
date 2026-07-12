const os = require("os")
console.log(os.totalmem()) // in bytes
console.log((os.totalmem()/1024**3)) // in GB