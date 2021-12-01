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
  res.render("setup");
});

router.post("/", (req, res, next) => {
  let testQuery = `INSERT INTO userHealth (username, day, way, part, setNumber, number, breakTime) VALUES ("${req.user.nickname}", "${req.body.day}","${req.body.way}","${req.body.part}","${req.body.setNumber}","${req.body.number}","${req.body.breakTime}")`;

  connection.query(testQuery, (err, results, fields) => {
    //results에 배열로 db값이 저장됨.
    if (err) {
      console.log(err);
    }
  });
  res.redirect("/daySelect");
});

router.get("/Monday", (req, res, next) => {
  let testQuery = "SELECT * FROM userHealth";
  connection.query(testQuery, (err, results, fields) => {
    if (!err) {
      let myArr = new Array();
      let myArr2 = new Array();
      for (let i = 0; i < results.length; i++) {
        if (results[i].day == "월") {
          myArr2.push(results[i]);
        }
      }
      for (let i = 0; i < results.length; i++) {
        myArr.push(results[i].day);
      }
      if (myArr.findIndex((e) => e === "월") !== -1) {
        console.log("월요일 루틴이 있습니다.");
        res.render("startHealth", {
          day: "월",
          arr1: myArr2,
        });
      } else {
        console.log("월요일 루틴이 없습니다.");
        res.render("setup");
      }
    } else {
      console.log(err);
    }
  });
});

router.get("/Tuesday", (req, res, next) => {
  let testQuery = "SELECT * FROM userHealth";
  connection.query(testQuery, (err, results, fields) => {
    if (!err) {
      let myArr = new Array();
      let myArr2 = new Array();
      for (let i = 0; i < results.length; i++) {
        if (results[i].day == "화") {
          myArr2.push(results[i]);
        }
      }
      for (let i = 0; i < results.length; i++) {
        myArr.push(results[i].day);
      }
      if (myArr.findIndex((e) => e === "화") !== -1) {
        console.log("화요일 루틴이 있습니다.");
        res.render("startHealth", {
          day: "화",
          arr1: myArr2,
        });
      } else {
        console.log("화요일 루틴이 없습니다.");
        res.render("setup");
      }
    } else {
      console.log(err);
    }
  });
});

router.get("/Wednesday", (req, res, next) => {
  let testQuery = "SELECT * FROM userHealth";
  connection.query(testQuery, (err, results, fields) => {
    if (!err) {
      let myArr = new Array();
      let myArr2 = new Array();
      for (let i = 0; i < results.length; i++) {
        if (results[i].day == "수") {
          myArr2.push(results[i]);
        }
      }
      for (let i = 0; i < results.length; i++) {
        myArr.push(results[i].day);
      }
      if (myArr.findIndex((e) => e === "수") !== -1) {
        console.log("수요일 루틴이 있습니다.");
        res.render("startHealth", {
          day: "수",
          arr1: myArr2,
        });
      } else {
        console.log("수요일 루틴이 없습니다.");
        res.render("setup");
      }
    } else {
      console.log(err);
    }
  });
});

router.get("/Thursday", (req, res, next) => {
  let testQuery = "SELECT * FROM userHealth";
  connection.query(testQuery, (err, results, fields) => {
    if (!err) {
      let myArr = new Array();
      let myArr2 = new Array();
      for (let i = 0; i < results.length; i++) {
        if (results[i].day == "목") {
          myArr2.push(results[i]);
        }
      }
      for (let i = 0; i < results.length; i++) {
        myArr.push(results[i].day);
      }
      if (myArr.findIndex((e) => e === "목") !== -1) {
        console.log("목요일 루틴이 있습니다.");
        res.render("startHealth", {
          day: "목",
          arr1: myArr2,
        });
      } else {
        console.log("목요일 루틴이 없습니다.");
        res.render("setup");
      }
    } else {
      console.log(err);
    }
  });
});

router.get("/Friday", (req, res, next) => {
  let testQuery = "SELECT * FROM userHealth";
  connection.query(testQuery, (err, results, fields) => {
    if (!err) {
      let myArr = new Array();
      let myArr2 = new Array();
      for (let i = 0; i < results.length; i++) {
        if (results[i].day == "금") {
          myArr2.push(results[i]);
        }
      }
      for (let i = 0; i < results.length; i++) {
        myArr.push(results[i].day);
      }
      if (myArr.findIndex((e) => e === "금") !== -1) {
        console.log("금요일 루틴이 있습니다.");
        res.render("startHealth", {
          day: "금",
          arr1: myArr2,
        });
      } else {
        console.log("금요일 루틴이 없습니다.");
        res.render("setup");
      }
    } else {
      console.log(err);
    }
  });
});

router.get("/Saturday", (req, res, next) => {
  let testQuery = "SELECT * FROM userHealth";
  connection.query(testQuery, (err, results, fields) => {
    if (!err) {
      let myArr = new Array();
      let myArr2 = new Array();
      for (let i = 0; i < results.length; i++) {
        if (results[i].day == "토") {
          myArr2.push(results[i]);
        }
      }
      for (let i = 0; i < results.length; i++) {
        myArr.push(results[i].day);
      }
      if (myArr.findIndex((e) => e === "토") !== -1) {
        console.log("토요일 루틴이 있습니다.");
        res.render("startHealth", {
          day: "토",
          arr1: myArr2,
        });
      } else {
        console.log("토요일 루틴이 없습니다.");
        res.render("setup");
      }
    } else {
      console.log(err);
    }
  });
});

router.get("/Sunday", (req, res, next) => {
  let testQuery = "SELECT * FROM userHealth";
  connection.query(testQuery, (err, results, fields) => {
    if (!err) {
      let myArr = new Array();
      let myArr2 = new Array();
      for (let i = 0; i < results.length; i++) {
        if (results[i].day == "일") {
          myArr2.push(results[i]);
        }
      }
      for (let i = 0; i < results.length; i++) {
        myArr.push(results[i].day);
      }
      if (myArr.findIndex((e) => e === "일") !== -1) {
        console.log("일요일 루틴이 있습니다.");
        res.render("startHealth", {
          day: "일",
          arr1: myArr2,
        });
      } else {
        console.log("일요일 루틴이 없습니다.");
        res.render("setup");
      }
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
