const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('hbs', exphbs({ extname: 'hbs' }));
app.set('view engine', 'hbs');

app.get('/inicio', function (req, res) {
    res.render('handles/inicio', {
        pageTitle: 'Página de inicio',
        siteTitle: 'Galeria de arte metropolitano',
        year: new Date().getFullYear()
    });
});

app.get('/about', function (req, res) {
    res.render('handles/about', {
        pageTitle: 'Acerca de',
        siteTitle: 'Galeria de arte metropolitano',
        year: new Date().getFullYear()
    });
});

app.get('/blog', function (req, res) {
    res.render('handles/blog', {
        pageTitle: 'Blog',
        siteTitle: 'Galeria de arte metropolitano',
        year: new Date().getFullYear()
    });
});

app.get('/contactenos', function (req, res) {
    res.render('handles/contactenos', {
        pageTitle: 'Contactenos',
        siteTitle: 'Galeria de arte metropolitano',
        year: new Date().getFullYear()
    });
});

app.get('/donaciones', function (req, res) {
    res.render('handles/donaciones', {
        pageTitle: 'Donaciones',
        siteTitle: 'Galeria de arte metropolitano',
        year: new Date().getFullYear()
    });
});

app.get('/eventos', function (req, res) {
    res.render('handles/eventos', {
        pageTitle: 'Eventos',
        siteTitle: 'Galeria de arte metropolitano',
        year: new Date().getFullYear()
    });
});

app.get('/Galeria', function (req, res) {
    res.render('handles/galeria', {
        pageTitle: 'Galeria',
        siteTitle: 'Galeria de arte metropolitano',
        year: new Date().getFullYear()
    });
});

app.get('/programas', function (req, res) {
    res.render('handles/programas', {
        pageTitle: 'Programas',
        siteTitle: 'Galeria de arte metropolitano',
        year: new Date().getFullYear()
    });
});

app.get('/header', function (req, res) {
    res.render('handles/header', {
        pageTitle: 'Header',
        siteTitle: 'Galeria de arte metropolitano',
        year: new Date().getFullYear()
    });
});

app.get('/footer', function (req, res) {
    res.render('handles/footer', {
        pageTitle: 'footer',
        siteTitle: 'Galeria de arte metropolitano',
        year: new Date().getFullYear()
    });
});





app.get('/faq', function (req, res) {
    res.render('handles/faq', {
        pageTitle: 'FaQ',
        siteTitle: 'Galeria de arte metropolitano',
        year: new Date().getFullYear()
    });
});


app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});
