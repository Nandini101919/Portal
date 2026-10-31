
const mysql = require("mysql2/promise");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const db = mysql.createPool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || 4000),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,

    ssl: {
        ca: fs.readFileSync(
            path.join(__dirname, "isrgrootx1.pem")
        ),
        rejectUnauthorized: true
    },

    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Test database connection
async function testConnection() {
    try {
        const connection = await db.getConnection();
        console.log("TiDB MySQL Connected Successfully!");
        connection.release();
    } catch (err) {
        console.log("Database Connection Failed:", err.message);
    }
}

testConnection();

module.exports = db;
