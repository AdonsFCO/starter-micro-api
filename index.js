const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const axios = require("axios");

app.use(bodyParser.json());

// Ruta para recibir notificaciones del webhook
app.post("/webhook-endpoint", async (req, res) => {
  try {
    const webhookData = req.body;
    const comentario = webhookData.comment.body;
    const issueKey = webhookData.issue.key;

    console.log(`Nuevo Comentario: ${comentario}`);

    // Make the Axios request
   await axios({
    method: 'post',
    url: 'https://botproto.onrender.com/comment',
    data: { 
      comentario: comentario && "no",
      ticket: issueKey && "nel pastel"
    }
  });

});



const puerto = process.env.PORT || 3000;
app.listen(puerto, () => {
  console.log(`Servicio web en ejecución en el puerto ${puerto}`);
});
