const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// Ruta para recibir notificaciones del webhook
app.post('/webhook-endpoint', (req, res) => {
  const webhookData = req.body;
  cosnole.log(webhookData);
  // Realiza acciones adicionales según tus necesidades

  res.status(200).send('Notificación recibida');
});

const puerto = process.env.PORT || 3000;
app.listen(puerto, () => {
  console.log(`Servicio web en ejecución en el puerto ${puerto}`);
});
