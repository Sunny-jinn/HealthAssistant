const express = require("express");
const fs = require("fs");
const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("index 불러오기 성공");
  //   fs.readFile("./views/index.ejs", (err, data) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       res.writeHead(200, { "Content-Type": "text/html" });
  //       res.end(data);
  //     }
  //   });
  res.render("index", {
    title: "하이하이",
  });
});

module.exports = router;
