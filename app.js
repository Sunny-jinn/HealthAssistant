const express = require("express");
const app = express();
const port = 3000;
const index = require("./routes/index");
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", index);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
