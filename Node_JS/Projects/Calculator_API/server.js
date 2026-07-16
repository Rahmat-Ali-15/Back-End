const http = require("http")
const url = require("url")

const hostname = 'localhost'
const port = 3000

const funcMap = {
    add: (a,b) => {
        return `Addition is : ${a+b}`
    },
    subtract: (a,b) => {
        return `Subtraction is : ${a-b}`
    },
    multiply: (a,b) => {
        return `Multiplication is : ${a * b}`
    },
    divide: (a,b) => {
        return `Division is : ${a / b}`
    },
}

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    let urlHandler = url.parse(req.url, true);
    let pathname = urlHandler.pathname;

    let {func, a,b} = urlHandler.query;

    if(pathname === "/cal"){
        if(func === undefined){
            res.write(funcMap["div"](+a, +b))
        }
        else{
            res.write(funcMap[func](+a, +b))
        }
    }
    res.end()
})

server.listen(port, hostname, () => {
    console.log("Server is Running")
})