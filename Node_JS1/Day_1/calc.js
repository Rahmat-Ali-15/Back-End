const {sum,sub,mul,div} = require("./index")
// console.log("🚀 ~ sum:", sum(3,5));

const num1 = +process.argv[2]
const num2 = +process.argv[3]

let operator = process.argv[4]

switch(operator){
    case "+":
        console.log(sum(num1,num2))
        break
    case "-":
        console.log(sub(num1,num2))
        break
    case "*":
        console.log(mul(num1,num2))
        break
    case "/":
        console.log(div(num1,num2))
        break
    default:
        return "Please Enter valid operator"
}
