const express = require("express");
const querystring = require("querystring");
const cookieParser = require("cookie-parser");


const PORT = process.env.port || 3001; //set express server port


const server = express(); //create our express server instance

server.use([express.urlencoded({ extended: true }), express.json()]);
server.use(cookieParser());


//import routes here
require("./routes/authRoutes")(server, querystring);


server.get("/home", (req,res) => { //basic test route to make sure our server works
    res.send("HELLO");
});



server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});