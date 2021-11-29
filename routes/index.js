const express = require("express");
const router = express.Router();
const passport = require("passport");
const KakaoStrategy = require("passport-kakao").Strategy;

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

passport.use(
  new KakaoStrategy(
    {
      clientID: "22a6970c100b4fa1232d4ee15a58ed5c",
      callbackURL: "/auth/login/kakao/callback",
      clientSecret: "",
    },
    async (accessToken, refreshToken, profile, done) => {
      await console.log(accessToken);
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

router.get("/auth/login/kakao", passport.authenticate("kakao"));

router.get(
  "/auth/login/kakao/callback",
  passport.authenticate("kakao", {
    successRedirect: "/success",
    session: false,
    failureRedirect: "/failure",
  })
);

module.exports = router;
