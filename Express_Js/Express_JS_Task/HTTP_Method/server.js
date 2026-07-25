import express from "express";
const app = express();

const Port = 7500

// Middleware
app.use(express.json())

// dummy database
const students = []

//# GET=> Get all students
app.get("/students", (req, res) => {
    res.status(200).json(
        {
            suceess: true,
            data: students
        }
    )
})

//# POST=> Add a new student
app.post("/students", (req, res) => {
    const {id,name, age} = req.body;

    students.push({id, name, age})

    res.status(201).json({
        suceess: true,
        msg: "Student Added Successfully",
        data: students
    })
})


// # PUT => Update student by ID
app.put("/students/:id", (req, res) => {
    const id = Number(req.params.id);

    const student = students.find((el) => el.id === id)

    if(!student){
        return res.status(404).json({
            suceess: false,
            msg: "Studetn not found"
        })
    }
    student.name = req.body.name;
    student.age = req.body.age

    res.status(200).json({
        success: true,
        msg: "Student updated successfully",
        data: student,
    })
})


// # DELETE => Delete a student by ID
app.delete("/students/:id", (req, res) => {
    const  id = Number(req.params.id);
    
    const index = students.findIndex((el)=> el.id === id)

    if(index === -1){
        return res.status(404).json({
            success: false,
            msg: "Student Not Found"
        })
    }

    students.splice(index, 1);
    res.status(200).json({
        success: true,
        msg: "Student Deleted Successfully",
        data: students
    })
})

app.listen(Port, () => {
    console.log(`Server is running on Port ${Port}`)
})