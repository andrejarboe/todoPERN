const Pool = require("pg").pool;

const pool = new Pool({
    user: "postgres",
    password: process.env.POSTGRESQL_PASSWORD,
    host: "localhost",
    port: 5432,
    database: "perntodo"
})

module.export = pool;