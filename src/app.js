const express = require('express');
const path = require('path');
const hbs = require('hbs'); //adding hbs package for the registration of the partials
const app = express(); //Through app you can access all the properties of the express

// const port = process.env.PORT || 8000 //This is use to set environment variables while deloying the website to choose a particular port.
const port = 8000;

//template-engine setup
// console.log(path.join(__dirname,'..views')); //this path of view folder was before the addition of the partials
// console.log(path.join(__dirname, '../templates/views')); //this path of view folder is used after the additon of the partials 
// app.set('views', path of view directory); // this is how below is working
const views_path = path.join(__dirname, '../templates/views');
app.set('views', views_path);
app.set('view engine', 'hbs'); //setting veiw engine as hbs

//partials path
const partials_path = path.join(__dirname, '../templates/partials');
hbs.registerPartials(partials_path);



//public static path
// console.log(path.join(__dirname, '../public')); you can see in console by using this that how public directory can be obtained
const static_path = path.join(__dirname, '../public');
app.use(express.static(static_path));//to use static path


// Routing
app.get('/', (req, res) => { //  '/' is your homepage and it will index.html serve and it should be of same name "index.html"
    res.render('index.hbs'); //because we are using hbs that's why render instead of send.
});

app.get('/about', (req, res) => {
    res.render('about.hbs');
});

app.get('/weather', (req, res) => { 
    res.render("welcome to weather page");
});

app.get('*', (req, res) => { //  '*' (abstrick - not sure) is used when the user will enter any random path then what will happen
    res.render("404error.hbs");
});

app.listen(port, () => {
    console.log(`Listening at port ${port}`);
});