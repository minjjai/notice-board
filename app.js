const express = require("express");
const { db } = require("./models/index.js");
const app = express();
const port = 3000;
const Router = require("./routes/index.js");
const bodyParser = require('body-parser');


db;
app.use(bodyParser.json());
app.use("/", Router);

// app.get("/", (req, res) => {
//   res.send("테스트 테스트");
// });
app.listen(port, () => {
  console.log(port, " Port 3000 ");
});
