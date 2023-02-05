const express = require("express");

// express app
const app = express();



// routes
app.get("/",(req,res)=> {
    res.json({message:"welcome to the app"})
})
// listen for requests
app.listen(4000, () => console.log(`listeneing on for port 4000`));
