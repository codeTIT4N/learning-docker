const express = require("express");
const app = express();

const port = 3000;

app.use(express.json());

app.get("/", (_, res) => {
  res.send("Hey!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
