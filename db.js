const Pool = require("pg").pool;

const pool = new Pool({
    user: "postgres",
    password: process.env,
    port: "localhost",
})