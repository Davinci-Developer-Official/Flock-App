/* eslint-disable no-unused-vars */
const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password:'mithamo',
    host:'localhost',
    port:5432,
    database:'flockapp'
});
module.exports= pool;