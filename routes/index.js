const express = require("express");
const fs = require("fs");
const router = express.Router();
const mysql = require("mysql");
const passport = require("passport");
const KakaoStrategy = require("passport-kakao").Strategy;

// const conn = {
//   host: "localhost",
//   user: "root",
//   password: "$unnyjin1041",
//   database: "bino",
// };

// const connection = mysql.createConnection(conn);
// connection.connect();

passport.use(
  "kakao-login",
  new KakaoStrategy(
    {
      clientID: "359a37c3d9b0bec98aab1f2882447b24",
      callbackURL: "/auth/login/kakao/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(accessToken);
      console.log(profile);
      return done(null);
    }
  )
);

router.get("/", (req, res, next) => {
  console.log("index 불러오기 성공");
  res.render("index", {
    title: "하이하이",
  });
});

router.get("/auth/login/kakao", passport.authenticate("kakao-login"));
router.get(
  "/auth/login/kakao/callback",
  passport.authenticate("kakao-login", { failureRedirect: "/실패" }),
  (req, res) => {
    res.redirect("/성공");
  }
);

module.exports = router;
