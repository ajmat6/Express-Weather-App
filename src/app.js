const express = require('express');
const path = require('path');
const app = express(); //Through app you can access all the properties of the express

// const port = process.env.PORT || 8000 //This is use to set environment variables while deloying the website to choose a particular port.
const port = 8000;

//public static path
// console.log(path.join(__dirname, '../public')); you can see in console by using this that how public directory can be obtained
const static_path = path.join(__dirname, '../public');
app.use(express.static(static_path));//to use static path

// Routing
app.get('/', (req, res) => { //  '/' is your homepage
    res.send("welcome to home page");
});

app.get('/about', (req, res) => {
    res.send("welcome to about page");
});

app.get('/weather', (req, res) => { 
    res.send("welcome to weather page");
});

app.get('*', (req, res) => { //  '*' (abstrick - not sure) is used when the user will enter any random path then what will happen
    res.send("404 error occured");
});

app.listen(port, () => {
    console.log(`Listening at port ${port}`);
});