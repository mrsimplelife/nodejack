const router = require("express").Router();

router.use((req, res, next) => {
  res.locals.user = null;
  res.locals.followerCount = 0;
  res.locals.followingCount = 0;
  res.locals.followerIdList = [];
  next();
});
router.get("/profile", (req, res) => {
  res.render("profile", { title: "my info -nodejack" });
});
router.get("/join", (req, res) => {
  res.render("join", { title: "join-nodejack" });
});
router.get("/", (req, res) => {
  const twits = [];
  res.render("main", { title: "nodejack", twits });
});
module.exports = router;
