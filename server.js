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

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor funcionando na porta ${PORT}`);
});
