const fs = require('fs');
const path = require('path');

const  loadAppHtml  = require('../../utils/loadAppHtml');

function home(req, res){
    const filePath = path.join(__dirname, '../../views/frontend/partials/form-suscriptor.html');
    try {

        const htmlContent = fs.readFileSync(filePath, 'utf8');
        loadAppHtml('frontend', 'home', `${process.env.APP_NAME}`, htmlContent, res);

    } catch (error) {
        console.error('Error al leer el archivo HTML:', err);
    }
    
}

module.exports = {
    home
}