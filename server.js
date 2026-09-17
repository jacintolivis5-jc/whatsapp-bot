const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Servidor do WhatsApp Bot funcionando!");
});

app.get("/webhook", (req, res) => {
  res.send("Webhook funcionando!");
});

app.post("/webhook", (req, res) => {
  console.log("Mensagem recebida:", req.body);
  res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor funcionando na porta ${PORT}`);
});
