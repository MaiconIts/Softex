const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Olá Express");
});

app.listen(8080, () => console.log("Servidor Ativo: http://localhost:8080/"));