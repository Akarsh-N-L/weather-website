const express = require("express");
const https = require("https");

const app = express();

app.get("/",(req,res)=>{
    const url = "https://api.openweathermap.org/data/2.5/weather?q=bengaluru&units=metric&appid=005474f74a263b53982ab3b5bef9ca48";
    https.get(url,(response)=>{
        console.log(response.statusCode);
        response.on("data",(data)=>{
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            res.send("<h3>"+temp+"</h3>");
        })
    })
})



app.listen(3000,()=>{
    console.log("Server is up and running on port 3000..");
});