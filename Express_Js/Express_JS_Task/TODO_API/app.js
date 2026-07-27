import express from 'express';

const app = express();

const PORT = 4001;

app.use(express.json());

const todoData = []

//# CREATE
app.post("/todo", (req, res) => {
    const {id, title, completed} = req.body;
    
    todoData.push({id, title, completed})

    res.status(201).json(
        {
            success: true,
            msg: "Todo dat added successfully",
            data: todoData
        }
    )
});

//# READ
app.get("/todo", (req, res) => {
    res.status(200).json(
        {
            success: true,
            msg: "Getting all data"
        }
    )
})

app.get("/todo/:id", (req, res) => {
    const id = Number(req.params.id);

    const todo = todoData.find((el) => el.id === id);

    if(!todo){
        return res.status(404).json(
            {
                success: false,
                msg: "Todo not found"
            }
        )
    }

    res.status(200).json(
        {
            success: true,
            data: todo
        }
    )
})

//# UPDATE
app.patch("/todo/:id", (req, res) => {
    const id = Number(req.params.id);

    const todo = todoData.find((el) => el.id === id);

    const {title, completed} = req.body;

    todo.title = title;
    todo.completed = completed;

    res.status(200).json(
        {
            sucess: true,
            msg: "Todo data updated successfully",
            data: todo
        }
    )
});


//# DELETE
app.delete("/todo/:id", (req, res) => {
     const id = Number(req.params.id);
     const index = todoData.findIndex(todo => todo.id === id);

    const deletedTodo = todoData.splice(index, 1);
    res.status(200).json({
        success: true,
        msg: "Todo deleted successfully",
        data: deletedTodo[0]
    });
})

app.use((req, res) => {
    res.status(404).json(
        {
            success: false,
            msg: "Page Not Found"
        }
    )
}) 

app.listen(PORT, () => {
    console.log(`Server is Running on ${PORT}`)
})