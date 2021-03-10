var mysql = require('mysql');
const { events } = require('./app');


var con = mysql.createConnection({
    host: "*********",
    user: "*********",
    password: "*********",
    database: "*********",
    port: "*********"
});

con.connect(function (err) {
    if (err) throw err;
    console.log('Database is connected successfully');
});


module.exports = con;