const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('hbs', exphbs({ extname: 'hbs' }));
app.set('view engine', 'hbs');

app.get('/inicio', (req, res) => {
    res.render('handle/inicio', {
        pageTitle: 'Página de inicio',
        siteTitle: 'Galeria de arte metropolitano',
        year: new Date().getFullYear()
        // Otros datos que quieras pasar a la plantilla
    });
});

app.get('/about', (req, res) => {
    res.render('handle/about', {
        pageTitle: 'Acerca de',
        siteTitle: 'Galeria de arte metropolitano',
        year: new Date().getFullYear()
        // Otros datos que quieras pasar a la plantilla
    });
});
app.get('/blog', (req, res) => {
    res.render('handle/blog', {
        pageTitle: 'Blog',
        siteTitle: 'Galeria de arte metropolitano',
        year: new Date().getFullYear()
        // Otros datos que quieras pasar a la plantilla
    });
});

app.get('/contactenos', (req, res) => {
    res.render('handle/contactenos', {
        pageTitle: 'Contacto',
        siteTitle: 'Galeria de arte metropolitano',
        year: new Date().getFullYear()
        // Otros datos que quieras pasar a la plantilla
    });
});

app.get('/donaciones', (req, res) => {
    res.render('handle/donaciones', {
        pageTitle: 'Donaciones',
        siteTitle: 'Galeria de arte metropolitano',
        year: new Date().getFullYear()
        // Otros datos que quieras pasar a la plantilla
    });
});

app.get('/eventos', (req, res) => {
    res.render('handle/eventos', {
        pageTitle: 'Eventos',
        siteTitle: 'Galeria de arte metropolitano',
        year: new Date().getFullYear()
        // Otros datos que quieras pasar a la plantilla
    });
});

app.get('/faq', (req, res) => {
    res.render('handle/faq', {
        pageTitle: 'FaQ',
        siteTitle: 'Galeria de arte metropolitano',
        year: new Date().getFullYear()
        // Otros datos que quieras pasar a la plantilla
    });
});

app.get('/galeria', (req, res) => {
    res.render('handle/galeria', {
        pageTitle: 'Galeria',
        siteTitle: 'Galeria de arte metropolitano',
        year: new Date().getFullYear()
        // Otros datos que quieras pasar a la plantilla
    });
});

app.get('/programas', (req, res) => {
    res.render('handle/programas', {
        pageTitle: 'Programas',
        siteTitle: 'Galeria de arte metropolitano',
        year: new Date().getFullYear()
        // Otros datos que quieras pasar a la plantilla
    });
});
// Otras rutas para las otras páginas


app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});

// Otras rutas para las otras páginas