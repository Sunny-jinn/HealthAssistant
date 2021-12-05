const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const test = require("../js/test");

const conn = {
  host: "localhost",
  port: "3306",
  user: "root",
  password: "$unnyjin1041",
  database: "practice",
};

let day, day_eng;
let myArr, myArr2;
let cnt = 0;

const connection = mysql.createConnection(conn); // DB 커넥션 생성
connection.connect(); // DB접속

router.use(express.urlencoded({ extended: false }));

router.get("/", (req, res, next) => {
  res.render("setup");
});

router.post("/", (req, res, next) => {
  let testQuery = `INSERT INTO userHealth (username, day, way, part, setNumber, number, breakTime, Id) VALUES ("${req.user.nickname}", "${req.body.day}","${req.body.way}","${req.body.part}","${req.body.setNumber}","${req.body.number}","${req.body.breakTime}","${cnt}")`;
  cnt++;
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
      day = "월";
      day_eng = "Monday";
      myArr = new Array();
      myArr2 = new Array();
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
      day = "화";
      day_eng = "Tuesday";
      myArr = new Array();
      myArr2 = new Array();
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
      day = "수";
      day_eng = "Wednesday";
      myArr = new Array();
      myArr2 = new Array();
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
      day = "목";
      day_eng = "Thursday";
      myArr = new Array();
      myArr2 = new Array();
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
      day = "금";
      day_eng = "Friday";
      myArr = new Array();
      myArr2 = new Array();
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
      day = "토";
      day_eng = "Saturday";
      myArr = new Array();
      myArr2 = new Array();
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
      day = "일";
      day_eng = "Sunday";
      myArr = new Array();
      myArr2 = new Array();
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

router.get("/remove/:Id", (req, res, next) => {
  let testQuery = "SELECT * FROM userHealth";
  const Id = req.params.Id;
  connection.query(testQuery, (err, results, fields) => {
    if (!err) {
      myArr = new Array();
      for (let i = 0; i < results.length; i++) {
        if (results[i].day == day) {
          myArr.push(results[i]);
        }
      }
      testQuery = `DELETE FROM userHealth WHERE id = ${Id}`;
      connection.query(testQuery, (err, results, fields) => {
        if (!err) {
          res.send(
            `<script>alert("삭제 완료!"); location.href='/setup/${day_eng}';</script>`
          );
        } else {
          console.log(err);
        }
      });
    } else {
      console.log(err);
    }
  });
});

router.get("/edit/:Id", (req, res, next) => {
  res.render("editHealth", {
    day: day,
    arr1: myArr2,
    Id: req.params.Id,
  });
});

router.post("/edit/:Id", (req, res, next) => {
  const Id = req.params.Id;
  let testQuery = `UPDATE userHealth SET way="${req.body.way}", part="${req.body.part}", setNumber="${req.body.setNumber}", number="${req.body.number}", breakTime="${req.body.breakTime}" WHERE Id = ${Id}`;
  connection.query(testQuery, (err, results, field) => {
    if (!err) {
      console.log("수정완료!");
      res.redirect(`/setup/${day_eng}`);
    } else {
      console.log(err);
    }
  });
});

router.post("/hi", (req, res, next) => {
  console.log(req.body.part);
  console.log(req.body.way);
  console.log(req.body.day);
  res.send(test.target);
});

module.exports = router;
