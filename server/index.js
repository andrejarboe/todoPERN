// const express = require("express");
// const app = express();
// const pool = require("./db");
// const PORT = 3000;
// const HOST = '0.0.0.0';

// //middleware
// app.use(cors);
// app.use(express.json()) //res.body

// app.get('/', (req, res) => {
//   res.send(`Hello World! from port: ${PORT}`)
// })


// //ROUTES//


// //start server
// app.listen(PORT, () => {
//     console.log(`Example app listening on port ${PORT}`)
// })

//get all todos

// get a todo

// update a todo 

const express = require('express')
const app = express()
const port = 5000
const cors = require("cors");

const bodyParser = require('body-parser')

// //middleware
app.use(cors());
app.use(express.urlencoded());
app.use(express.json()) //res.body

app.get('/', (req, res) => {
    res.send(`Hello asdf ! From port ${port}.`)
})

// create a todo
app.post("/todos", async (req, res) => {
    try {

        console.log(res.body);

    } catch (error) {
        console.log(error.message);
    }
});




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})