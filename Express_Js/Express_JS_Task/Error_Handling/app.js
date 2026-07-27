import express from "express";

const app = express();

const PORT = 3001;

app.use(express.json());

const users = [];

// ==========================
// CREATE USER
// ==========================
app.post("/user", (req, res) => {
    try {
        const { name, age } = req.body;

        // Validation
        if (!name) {
            return res.status(400).json({
                success: false,
                message: "Name is required"
            });
        }

        if (age === undefined) {
            return res.status(400).json({
                success: false,
                message: "Age is required"
            });
        }

        if (typeof age !== "number") {
            return res.status(400).json({
                success: false,
                message: "Age must be a number"
            });
        }

        if (age <= 0) {
            return res.status(400).json({
                success: false,
                message: "Age must be greater than 0"
            });
        }

        const newUser = {
            id: users.length + 1,
            name,
            age
        };

        users.push(newUser);

        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: newUser
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
});

// ==========================
// GET ALL USERS
// ==========================
app.get("/user", (req, res) => {
    try {
        res.status(200).json({
            success: true,
            total: users.length,
            data: users
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
});

// ==========================
// GET USER BY ID
// ==========================
app.get("/user/:id", (req, res) => {
    try {
        const id = Number(req.params.id);

        const user = users.find(user => user.id === id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            data: user
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
});

// ==========================
// UPDATE USER
// ==========================
app.patch("/user/:id", (req, res) => {
    try {
        const id = Number(req.params.id);

        const user = users.find(user => user.id === id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        const { name, age } = req.body;

        if (name !== undefined) {
            user.name = name;
        }

        if (age !== undefined) {

            if (typeof age !== "number") {
                return res.status(400).json({
                    success: false,
                    message: "Age must be a number"
                });
            }

            if (age <= 0) {
                return res.status(400).json({
                    success: false,
                    message: "Age must be greater than 0"
                });
            }

            user.age = age;
        }

        res.status(200).json({
            success: true,
            message: "User updated successfully",
            data: user
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
});

// ==========================
// DELETE USER
// ==========================
app.delete("/user/:id", (req, res) => {
    try {
        const id = Number(req.params.id);

        const index = users.findIndex(user => user.id === id);

        if (index === -1) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        const deletedUser = users.splice(index, 1);

        res.status(200).json({
            success: true,
            message: "User deleted successfully",
            data: deletedUser[0]
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
});

// ==========================
// CUSTOM 404 ROUTE
// ==========================
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});


app.listen(PORT, () => {
    console.log(`Server is runnig on ${PORT}`)
})