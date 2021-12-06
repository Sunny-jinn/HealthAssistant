const express = require("express");
const router = express.Router();
const mysql = require("mysql");

router.use(express.urlencoded({ extended: false }));

const conn = {
  host: "localhost",
  port: "3306",
  user: "root",
  password: "$unnyjin1041",
  database: "practice",
};

let testQuery;

const connection = mysql.createConnection(conn); // DB 커넥션 생성
connection.connect(); // DB접속

router.get("/", (req, res) => {
  testQuery = `SELECT * FROM user_info WHERE username="${req.user.nickname}"`;
  connection.query(testQuery, (err, results, fields) => {
    if (!err) {
      const userHeight = results[0].userHeight;
      const userWeight = results[0].userWeight;
      testQuery = `SELECT * FROM user_info WHERE userWeight <= (${userWeight} + 5) and userWeight >= (${userWeight} -5 ) and userHeight <= (${userHeight} +3) and userHeight >= (${userHeight} -5) and username != "${req.user.nickname}"`;
      connection.query(testQuery, (err, results, fields) => {
        if (err) {
          console.log(err);
        } else {
          res.render("otherUser", {
            userlist: results,
          });
        }
      });
    }
  });
});

router.get("/show/:username", (req, res) => {
  const username = req.params.username;
  testQuery = `SELECT * FROM userHealth WHERE username = "${username}"`;
  connection.query(testQuery, (err, results, field) => {
    if (err) {
      console.log(err);
    } else {
      res.render("otherHealth", {
        arr1: results,
        username: username,
      });
    }
  });
});

module.exports = router;
