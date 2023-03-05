const express = require("express");
const https = require("https");

const app = express();

app.get("/",(req,res)=>{
    res.send("<h1>Successful</h1>");
});

app.listen(3000,()=>{
    console.log("Server is up and running on port 3000..");
});