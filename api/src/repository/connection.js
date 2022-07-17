import 'dotenv/config'

import mysql from 'mysql2/promise.js'

const con = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
})


export{ con }