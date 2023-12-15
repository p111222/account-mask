import mysql from 'mysql'

export const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password: "pj2435pj",
    database: "corporateuser"
})