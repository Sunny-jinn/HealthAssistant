const express = require("express");
const router = express.Router();
const mysql = require("mysql");

const conn = {
  host: "localhost",
  port: "3306",
  user: "root",
  password: "$unnyjin1041",
  database: "practice",
};

const connection = mysql.createConnection(conn); // DB 커넥션 생성
connection.connect(); // DB접속

router.use(express.urlencoded({ extended: false }));

router.get("/", (req, res, next) => {
  console.log("로그인 성공!");
  res.render("user", {
    title: "로그인 성공!",
    nickname: req.user.nickname,
    userId: req.user.user_id,
  });
});

router.post("/", (req, res) => {
  const height = req.body.height;
  const weight = req.body.weight;

  let testQuery = `INSERT INTO user_info (username, userHeight, userWeight) values ("${req.user.nickname}", ${height}, ${weight})`;
  // let testQuery = `INSERT INTO 'user_info' ('username', 'userHeight)`;

  connection.query(testQuery, (err, results, fields) => {
    if (err) {
      console.log(err);
    }
    if (results.length == 0) {
      console.log("비었습니다");
    } else {
      console.log(results);
    }
  });

  console.log("키는 " + height + "cm, 몸무게는 " + weight + "kg 입니다.");
  res.send(
    `<script>alert("키는 ${height}cm, 몸무게는 ${weight}kg 입니다"); location.href='/daySelect';</script>`
  );
  // res.redirect("/");
});

module.exports = router;
