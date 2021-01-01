const express = require("express");


const PORT = process.env.port || 3001; //set express server port


const server = express(); //create our express server instance

server.use([express.urlencoded({ extended: true }), express.json()]);


server.get("/home", (req,res) => { //basic test route to make sure our server works
    res.send("HELLO");
});



server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});