const express = require("express");
const router = express.Router();

router.use(express.urlencoded({ extended: false }));

router.get("/", (req, res, next) => {
  console.log("오늘의 요일!");
  res.render("daySelect");
});

// router.post("/", (req, res) => {
//   const height = req.body.height;
//   const weight = req.body.weight;

//   console.log("키는 " + height + "cm, 몸무게는 " + weight + "kg 입니다.");
//   res.send(
//     `<script>alert("키는 ${height}cm, 몸무게는 ${weight}kg 입니다"); location.href='/user';</script>`
//   );
//   // res.redirect("/");
// });

module.exports = router;
