const { isLoggedIn, isNotLoggedIn } = require("./middlewares");
const { Post, User } = require("../models");
const router = require("express").Router();

router.use((req, res, next) => {
  res.locals.user = req.user;
  console.log(req.user);
  res.locals.followerCount = req.user ? req.user.Followers.length : 0;
  res.locals.followingCount = req.user ? req.user.Followings.length : 0;
  res.locals.followingIdList = req.user
    ? req.user.Followings.map((f) => f.id)
    : [];
  next();
});
router.get("/profile", isLoggedIn, (req, res) => {
  res.render("profile", { title: "my info -nodejack" });
});
router.get("/join", isNotLoggedIn, (req, res) => {
  res.render("join", { title: "join-nodejack" });
});
router.get("/", async (req, res, next) => {
  try {
    const posts = await Post.findAll({
      include: {
        model: User,
        attributes: ["id", "nick"],
      },
      order: [["createdAt", "DESC"]],
    });
    res.render("main", { title: "nodejack", twits: posts });
  } catch (error) {
    console.log(error);
    next(error);
  }
});
module.exports = router;
