const express = require("express");
const app = express();
const port = 3000;
const passport = require("passport");
const index = require("./routes/index");
const user = require("./routes/user");
const path = require("path");
const bodyParser = require("body-parser");
var session = require("express-session");

passport.serializeUser(function (user, done) {
  console.log("serialized");
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  console.log("deserialized");
  done(null, user);
});

app.use(express.json());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// app.use(
//   session({
//     secret: "secrettexthere",
//     saveUninitialized: true,
//     resave: true,
//   })
// );

app.use(passport.initialize());
// app.use(passport.session());
app.use("/", index);
app.use("/user", user);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
