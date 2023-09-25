const path = require('path');
const hbs = require('hbs');
const express = require('express');

const app = express();

//Define path for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');


//Setup handlebars engine  and views loaction
app.set('view engine', 'hbs');
app.set('views', viewsPath);

//register partials
hbs.registerPartials(partialsPath);

// setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index',{
        pageTitle: 'Weather',
        title: 'Weather',
        name: 'Kamelot'
    });
});

//About page
app.get('/about', (req, res) => {
    res.render('about',{
        pageTitle: 'about',
        title: 'About Page',
        name: 'Kamelot'
    });
});

//Help page
app.get('/help', (req, res) => {
    res.render('help',{
        pageTitle: 'help',
        title: 'Help Page',
        helpText: 'This is some helpful text',
        name: 'Kamelot'
    });
});

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is Snowing',
        location: 'Philadelphia'
    });
});

app.get('/help/*', (req, res) => {
    res.render('404', {
        pageTitle: '404',
        title: '404 Page',
        errorText: 'Help article not found',
        name: 'Kamelot'
    });
});
app.get('*', (req, res) => {
    res.render('404', {
        pageTitle: '404',
        title: '404 Page',
        errorText: 'Page not found',
        name: 'Kamelot'
    });
});


app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});