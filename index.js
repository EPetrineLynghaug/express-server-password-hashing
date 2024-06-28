const bcrypt = require("bcrypt");
const express = require("express");
const bodyParser = require("body-parser");



const app = express();
app.use(bodyParser.json());

app.post("/hash", async (req, res) => {
    const hash = await bcrypt.hash(req.body.password, 10);
  console.log(hash, req.body.password);
  res.send("Hashed password: " + hash);
});

app.post("/compare", async (req, res) => {
  const result = await bcrypt.compare(req.body.password, req.body.hash);
  res.send("Sammenligning: " + result);
});


app.listen(3000, () => {
  console.log("Server started on port 3000");
});
