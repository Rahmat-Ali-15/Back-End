const querystring = require("querystring");
const obj = {
    name: "Rahmat",
    age: 21
}
console.log(querystring.stringify(obj))

// # Empty space count as %20
const obj1 = {
    name: "Rahmat ",
    age: 21
}
console.log(querystring.stringify(obj1))