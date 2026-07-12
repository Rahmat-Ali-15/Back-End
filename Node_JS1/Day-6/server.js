const express = require('express');

const fs = require('fs');

// Creation state of server
const app = express();

// Middleware

app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello')
})

// Create

app.post('/create_note', (req,res)=> {
    const data = req.body;
    console.log("🚀 ~ data:", data);
    if(data){
        fs.writeFile('./data.json', JSON.stringify(data), (err)=> {
            if(err){
                console.log(err)
            }
            res.send('done')
        })
    }
    res.send('Please fill the data in body')
})


/* 
read
update
delete
*/

app.listen(7000, () => {
    console.log('Port in running on 7000')
})

