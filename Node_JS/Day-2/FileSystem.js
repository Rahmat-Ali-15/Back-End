const fs = require('fs')

let readFileSync = fs.readFileSync('./even.js', {encoding: 'utf-8'})
console.log("🚀 ~ readFileSync:", readFileSync);



// CRUD

//# Reading the data
fs.readFile('./even.js', {encoding: 'utf-8'}, (err, data) => {
    if(data){
        console.log("🚀 ~ data:", data);
    }
    else{
        console.log("🚀 ~ err:", err);
    }
})

//# Creating the data
// const dataValue = fs.writeFileSync('./note.txt', 'Rahmat')


// fs.writeFileSync('./note.txt', 'hello', (err)=> {
//     if(err){
//         console.log("🚀 ~ err:", err);
//     }
// })

//# Appending the data in existing data
// const appendValue = fs.appendFileSync('./note.txt', ' Ali')

// fs.appendFileSync('./note.txt', ' Khan', (err)=> {
//     if(err){
//         console.log("🚀 ~ err:", err);
//     }
// })

//# Deleting the existing file
// fs.rm('./index.html', (err, data) => {
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(data)
//     }
// })

//# Deleting the existing data

// fs.readFile('./note.txt', 'utf-8', (err, data)=> {
//     if(err){
//         console.log(err)
//     }
//     const value = data.split(' ')
//     console.log("🚀 ~ value:", value);

//     const updateValue = data.replace(
//         value.splice(
//             value.findIndex((el) => el === 'World'), 1
//         ), ""
//     )
//     console.log("🚀 ~ updateValue:", updateValue);

//     fs.writeFile('./note.txt', updateValue.trim(), (errs, data1) => {
//         if(errs) console.log(errs)
        
//         console.log(data1)
//     })
// })


// fs.readFile('./note.txt', 'utf-8', (err, data)=> {
//     if(err){
//         console.log(err)
//     }
//     const value = data.split(' ').pop()
//     console.log("🚀 ~ value:", value);

//     // fs.writeFile('./note.txt', updateValue.trim(), (errs, data1) => {
//     //     if(errs) console.log(errs)
        
//     //     console.log(data1)
//     // })
// })