const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

//app.get(routes, callback function)
app.get("", (req, res)=>{
    res.send("Welcome to Landing Page")
})

app.get("/about", (req, res)=>{
    res.send("Welcome to About Page")
})

app.get("/weather", (req, res)=>{
    res.send("Welcome to Weather Page")
})

app.get("*", (req, res)=>{
    res.send('404 error page')
})

app.listen(port, () => {
    console.log(`listening to the port at ${port}`);
})