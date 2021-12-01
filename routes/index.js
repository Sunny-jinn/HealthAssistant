const express = require("express");
const router = express.Router();
const passport = require("passport");
const axios = require("axios");
const KakaoStrategy = require("passport-kakao").Strategy;
const session = require("express-session");
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

let testQuery = "SELECT * FROM userInfo";

connection.query(testQuery, (err, results, fields) => {
  //results에 배열로 db값이 저장됨.
  let arr1 = new Array();
  for (let i = 0; i < results.length; i++) {
    arr1.push(results[i].username);
  }
  if (err) {
    console.log(err);
  }
  // console.log(arr1);
});

passport.serializeUser(function (user, done) {
  // console.log("serialized");
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  // console.log("deserialized");
  done(null, user);
});

router.use(session({ secret: "anything" }));
router.use(passport.initialize());
router.use(passport.session());

passport.use(
  "kakao-login",
  new KakaoStrategy(
    {
      clientID: "359a37c3d9b0bec98aab1f2882447b24",
      callbackURL: "/auth/kakao/callback",
      clientSecret: "XvRp0bV6dZ8aj9f7ApYCT0ZoeDEL9cGi",
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log(accessToken);
      console.log(profile);
      return done(null, {
        //req.user가 되는 부분
        user_id: profile._json.id,
        nickname: profile._json.properties.nickname,
      });
    }
  )
);
router.get("/", (req, res) => {
  res.render("index", {
    title: "안녕하세요",
  });
});

router.get("/auth/kakao", passport.authenticate("kakao-login"));

router.get(
  "/auth/kakao/callback",
  passport.authenticate("kakao-login", {
    failureRedirect: "/failure",
  }),
  (req, res) => {
    res.redirect("/user");
  }
);
module.exports = router;
