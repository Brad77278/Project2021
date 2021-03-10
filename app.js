const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
var mysql = require('mysql');
const ejs = require("ejs");
var db = require('./database');

const app = express();

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

// Get routes
app.get("/", function (req, res) {
    res.render(__dirname + '/views/index');
});

app.get("/views/home", function (req, res) {
    db.query('SELECT * from events ORDER BY id DESC;', function (err, newEvent, fields) {
        if (err) throw err;

        res.render(__dirname + '/views/home', {
            newEvent: newEvent
        });
    });
});

app.get("/views/characters", function (req, res) {
    res.render(__dirname + '/views/characters');
});

app.get("/views/campaign", function (req, res) {
    res.render(__dirname + '/views/campaign');
});

app.get("/views/events", function (req, res) {
    // query to show events in desending order
    db.query('SELECT * from events ORDER BY id DESC;', function (err, newEvent, fields) {
        if (err) throw err;

        res.render(__dirname + '/views/events', {
            newEvent: newEvent
        });
    });
});

app.get("/views/success", function (req, res) {
    res.render(__dirname + '/views/success');
});

app.get("/views/failure", function (req, res) {
    res.render(__dirname + '/views/failure');
});

app.get("/views/archive/:id", function (req, res) {
    // var event = req.query.id;
    db.query('SELECT * from events ORDER BY id DESC;', function (err, newEvent, fields) {
        if (err) throw err;

        var id = req.params;
        res.render(__dirname + '/views/archive/event', {
            newEvent: newEvent,
            id: id
        });
    });
});

app.get("/views/auth/login", function(req, res){
    res.render(__dirname + '/views/auth/login');
});

// Post routes
app.post("/", function (req, res) {
    res.render(__dirname + "/views/home");
});

app.post("/views/events", function (req, res) {
    res.render(__dirname + "/views/createEvent");
});

app.post("/views/createEvent", function (req, res) {

    //Inserts data into db
    var title = req.body.newEventTitle;
    var description = req.body.newEventDescription;
    var eventMonth = req.body.newEventMonth;
    var eventDay = req.body.newEventDay;
    var year = req.body.newEventYear;
    var eventTime = req.body.newEventTime;
    var amOrPm = req.body.newEventSelector;

    if (title.includes("'")){
        title = title.replace(/'/gi, "\\'");
    }

    if (description.includes("'")){
        description = description.replace(/'/gi, "\\'");
    }
    
    var time = eventTime + " " + amOrPm;

    var date = eventMonth + " " + eventDay + ", " + year + " at " + time;

    var sql = `INSERT INTO events (title, date, description) VALUES ('${title}', '${date}', '${description}')`;
    db.query(sql, function (err, data) {
        if(res.statusCode == 200){
            console.log("Recorded inserted.");
            res.render(__dirname + '/views/success');
        } else{
            res.render(__dirname + '/views/failure');
        }
    });
});

app.post("/views/failure", function (req, res) {
    res.redirect(__dirname + "/views/events");
});

// post route for create post
app.post("/views/campaign", function(req, res){
    var new_post = req.body.blog_entry;
   
    res.write(new_post);
    res.send();
});

app.listen(3000, function () {
    console.log("Server is running on port 3000");
});