// load the things we need
var express = require("express");
var app = express();

// set the view engine to ejs
app.use(express.static("./public"));
app.set("view engine", "ejs");

// use res.render to load up an ejs view file
app.use((req, res, next) => {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();

  const isavailbale = day >= 1 && day <= 7 && hour >= 9 && hour < 17;
  if (isavailbale) {
    next();
  } else {
    res.status(500).render("pages/notfound");
  }
});
// index page
app.get("/", function (req, res) {
  res.render("pages/index");
});

// about page
app.get("/Service", function (req, res) {
  res.render("pages/Service");
});
app.get("/Contact", function (req, res) {
  res.render("pages/Contact");
});
const port = 8080;
app.listen(port, () => console.log("8080 is the magic port"));
