const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors);
app.use(express.json()) //res.body

app.listen(5000, () => {
    console.log("server stated started on port 5000");
})

//ROUTES//

// create a todo
app.post("/todos", async(req, res) => {
    try {

        console.log(res.body);
        
    } catch (error) {
       console.log(error.message); 
    }
});

//get all todos

// get a todo

// update a todo 