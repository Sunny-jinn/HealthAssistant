const express = require("express");
const router = express.Router();
router.get("/", (req, res, next) => {
  console.log("로그인 성공!");
  res.render("user", {
    title: "로그인 성공!",
    nickname: req.user.nickname,
    userId: req.user.user_id,
  });
});
module.exports = router;
