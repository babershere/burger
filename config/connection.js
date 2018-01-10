var mysql = require('mysql')

var connection = mysql.createConnection(process.env.JAWSDB_URL || {
    host: "localhost",
    user: "root",
    password: "root",
    port: "3306",
    database: "burger_db"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);
});

module.exports = connection;