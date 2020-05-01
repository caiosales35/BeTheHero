const express = require('express');

const app = express();

app.get('/', (request, response) => response.json({
    titulo: 'Ola Mundo',
    evento: 'Semana OmniStack 11',
    aluno: 'Caio Sales'
}));

app.listen(3333);
