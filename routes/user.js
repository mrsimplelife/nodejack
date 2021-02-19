const { isLoggedIn, isNotLoggedIn } = require("./middlewares");
const { Post, User } = require("../models");
const router = require("express").Router();

router.post("/:id/follow", isLoggedIn, async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: req.user.id } });
    if (user) {
      await user.addFollowing(parseInt(req.params.id, 10));
      res.send("success");
    } else {
      res.status(404).send("no user");
    }
    res.end();
  } catch (error) {
    next(error);
  }
});
module.exports = router;
