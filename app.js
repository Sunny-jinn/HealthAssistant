const express = require("express");
const app = express();
const port = 3000;
const passport = require("passport");
const index = require("./routes/index");
const user = require("./routes/user");
const path = require("path");
const setup = require("./routes/setup");
const daySelect = require("./routes/daySelect");

passport.serializeUser(function (user, done) {
  console.log("serialized");
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  console.log("deserialized");
  done(null, user);
});

app.use(express.json());
app.use(express.static(__dirname + "/public"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(passport.initialize());
app.use("/", index);
app.use("/user", user);
app.use("/setup", setup);
app.use("/daySelect", daySelect);
app.use("/static", express.static("./js/"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
