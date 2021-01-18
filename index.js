require("dotenv").config();
const express = require("express");
const querystring = require("querystring");
var cookieParser = require("cookie-parser");
var cors = require("cors");


const PORT = process.env.port || 3001; //set express server port


const server = express(); //create our express server instance

server.use([express.urlencoded({ extended: true }), express.json()]);
server.use(cookieParser());
server.use(cors());


//import routes here


server.get("/home", (req,res) => { //basic test route to make sure our server works
    res.send("HELLO");
});



server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});