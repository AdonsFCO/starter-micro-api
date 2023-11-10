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

    // Realiza acciones adicionales según tus necesidades

    // Make the Axios request
    const axiosResponse = await axios.post("https://botproto.onrender.com/comment", {
      ticket: issueKey,
      comment: comentario,
    });

    console.log("Axios Response:", axiosResponse.data);
    res.status(200).send("Notificación recibida");
  } catch (error) {
    console.error("Error sending Axios request:", error);
    res.status(500).send("Internal Server Error");
  }
});

const puerto = process.env.PORT || 3000;
app.listen(puerto, () => {
  console.log(`Servicio web en ejecución en el puerto ${puerto}`);
});
