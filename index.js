const express = require("express");
const app = express();
const port = 8000;

const Vigenere = require("caesar-salad").Vigenere;
const password = "password";

app.get("/encode/:cipher", (req, res) => {
  const result = Vigenere.Cipher(password).crypt(req.params.cipher);
  res.send(`<h1>${result}</h1>`);
});

app.get("/decode/:cipher", (req, res) => {
  const result = Vigenere.Decipher(password).crypt(req.params.cipher);
  res.send(`<h1>${result}</h1>`);
});

app.get("/:echo", (req, res) => {
  res.send(`<h1>${req.params.echo}</h1>`);
});

app.listen(port, () => {
  console.log("Server: " + port);
});
