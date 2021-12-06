const express = require("express");
const router = express.Router();
const passport = require("passport");
const axios = require("axios");
const KakaoStrategy = require("passport-kakao").Strategy;
const session = require("express-session");
const mysql = require("mysql");

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

router.get("/auth/logout/kakao", function (req, res) {
  req.logout();
  res.redirect("/");
});

module.exports = router;
