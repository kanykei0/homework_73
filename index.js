const express = require("express");
const app = express();
const port = 8000;

app.get("/:echo", (req, res) => {
  res.send(`<h1>${req.params.echo}</h1>`);
});

app.listen(port, () => {
  console.log("Server: " + port);
});
