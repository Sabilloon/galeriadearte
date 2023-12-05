const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('hbs', exphbs({ extname: 'hbs' }));
app.set('view engine', 'hbs');

app.get('/inicio', function (req, res) {
    res.render('handles/inicio.hbs', {
        pageTitle: 'Página de inicio',
        siteTitle: 'Galeria de arte metropolitano',
        year: new Date().getFullYear()
    });
});

app.get('/about', function (req, res) {
    res.render('handles/about.hbs', {
        pageTitle: 'Acerca de',
        siteTitle: 'Galeria de arte metropolitano',
        year: new Date().getFullYear()
    });
});

app.get('/blog', function (req, res) {
    res.render('handles/blog.hbs', {
        pageTitle: 'Blog',
        siteTitle: 'Galeria de arte metropolitano',
        year: new Date().getFullYear()
    });
});

app.get('/contactenos', function (req, res) {
    res.render('handles/contactenos.hbs', {
        pageTitle: 'Contactenos',
        siteTitle: 'Galeria de arte metropolitano',
        year: new Date().getFullYear()
    });
});

app.get('/donaciones', function (req, res) {
    res.render('handles/donaciones.hbs', {
        pageTitle: 'Donaciones',
        siteTitle: 'Galeria de arte metropolitano',
        year: new Date().getFullYear()
    });
});

app.get('/eventos', function (req, res) {
    res.render('handles/eventos.hbs', {
        pageTitle: 'Eventos',
        siteTitle: 'Galeria de arte metropolitano',
        year: new Date().getFullYear()
    });
});

app.get('/Galeria', function (req, res) {
    res.render('handles/galeria.hbs', {
        pageTitle: 'Galeria',
        siteTitle: 'Galeria de arte metropolitano',
        year: new Date().getFullYear()
    });
});

app.get('/programas', function (req, res) {
    res.render('handles/programas.hbs', {
        pageTitle: 'Programas.hbs',
        siteTitle: 'Galeria de arte metropolitano',
        year: new Date().getFullYear()
    });
});

app.get('/header', function (req, res) {
    res.render('handles/header.hbs', {
        pageTitle: 'Header',
        siteTitle: 'Galeria de arte metropolitano',
        year: new Date().getFullYear()
    });
});

app.get('/footer', function (req, res) {
    res.render('handles/footer.hbs', {
        pageTitle: 'footer',
        siteTitle: 'Galeria de arte metropolitano',
        year: new Date().getFullYear()
    });
});

app.get('/faq', function (req, res) {
    res.render('handles/faq.hbs', {
        pageTitle: 'FaQ',
        siteTitle: 'Galeria de arte metropolitano',
        year: new Date().getFullYear()
    });
});


app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});
