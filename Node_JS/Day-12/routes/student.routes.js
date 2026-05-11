const express = require('express');

const studentRoutes = express.Router();
const {studentModel} = require('../model/student.model');

// path = "/student/"
// read
studentRoutes.get('/', async(req, res) => {
    const studentData = await studentModel.find();
    res.send({msg: 'data found', data: studentData})
})

// path = "/student/createstudent"
// create
studentRoutes.post('/createstudent', async (req, res) => {
    if(req.body){
        const studentData = new studentModel(req.body);
        await studentData.save();
        res.send({msg: 'data created', data: studentData})
    }
})


// path="/student/updatestudent"
// update
studentRoutes.patch('/updatestudent', async (req, res) => {

})


// path="/student/deletestudent"
// delete
studentRoutes.get('/deletestudent', (req, res) => {})