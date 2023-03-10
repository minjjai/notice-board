const express = require("express");
const { db } = require("./models/index.js");
const app = express();
const port = 3000;
const Router = require("./routes/index.js");
const bodyParser = require('body-parser');

db;

// app.use(bodyParser.json());
// app.use("/", Router);

app.use(express.static('views'));
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');
// app.use('/views', express.static(__dirname + '/views' ));

// app.get("/", function (req, res) {
//   res.render("main.html");
// });

app.get("/", function (req, res) {
  res.sendFile('main.html', {root : __dirname + '/views'});
});

app.use(bodyParser.json());
app.use("/", Router);

app.listen(port, () => {
  console.log(port, " Port 3000 ");
});
