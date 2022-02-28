const express = require("express");
const mysql = require('mysql');

const app = express();

//Create database connection
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: "fortunecookie"
});

conn.connect((err)=> {
    if(err) {
        console.log(err);
        return;
    }
    console.log("Connection established");
    return conn;
});

//routes
//root route
app.get("/", function(req,res){
    res.send("it works!");
});

//server listener
app.listen("3307", "127.0.0.1", function (){
    console.log("express server running...");
});