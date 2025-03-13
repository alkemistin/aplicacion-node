const express = require('express');
const router = express.Router();
const loadAppHtml = require('../utils/loadAppHtml');
const { home } = require('../controllers/frontend/homeController');
const { about } = require('../controllers/frontend/aboutController');

const tipo_plantilla = 'frontend';

router.get('/', home);

router.get('/nosotros', about);

router.get('/servicios', (req, res) => {
    loadAppHtml(tipo_plantilla, 'servicios', `${process.env.APP_NAME}: Servicios`, 'Diseño y Desarrollo Web.', res);
});

router.get('/contacto', (req, res) => {
    loadAppHtml(tipo_plantilla, 'contacto', `${process.env.APP_NAME}: Contacto`, 'Correo de contacto: example@example.cl', res);
});

module.exports = router;