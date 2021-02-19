const { isLoggedIn, isNotLoggedIn } = require("./middlewares");

const router = require("express").Router();

router.use((req, res, next) => {
  res.locals.user = null;
  res.locals.followerCount = 0;
  res.locals.followingCount = 0;
  res.locals.followerIdList = [];
  next();
});
router.get("/profile", isLoggedIn, (req, res) => {
  res.render("profile", { title: "my info -nodejack", user: req.user });
});
router.get("/join", isNotLoggedIn, (req, res) => {
  res.render("join", { title: "join-nodejack" });
});
router.get("/", (req, res) => {
  const twits = [];
  res.render("main", { title: "nodejack", twits, user: req.user });
});
module.exports = router;
