require('dotenv').config();
const express = require('express');
const mikrowispController = require('./controllers/mikrowispController');
const app = express();
const port = process.env.PORT || 3000;

app.get("/obtenerCredencialesPortal/:idmkw/:tokenmikrowisp", mikrowispController.obtenerCredencialesPortal);
app.get("/obtenerDatos/:idmkw/:tokenmikrowisp", mikrowispController.obtenerDatos);
app.get("/saldo/:idmw/:tokenmw", mikrowispController.obtenerSaldo);
app.get("/registrarpagomw/:idmw/:idokb/:tokenmw/:tokenokeybot", mikrowispController.registrarPagoMW);
app.get("/enviarSaludo/:id/:token", mikrowispController.enviarSaludo);
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});