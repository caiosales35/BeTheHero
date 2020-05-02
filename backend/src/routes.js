const express = require('express');

const routes = express.Router();

routes.get('/', (request, response) => response.json({
    titulo: 'Ola Mundo!',
    evento: 'Semana OmniStack 11',
    aluno: 'Caio Sales'
}));

module.exports = routes;
