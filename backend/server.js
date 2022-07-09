require("dotenv").config();

const express = require("express");

// express app
const app = express();

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
});

// routes
app.get("/", (req, res) => {
    res.json({msg: "Welcome to the app!"})
}); 

// listen for requests
app.listen(process.env.PORT, () => {
    console.log("Port listening in full effect baby!");
});

