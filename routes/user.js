const { isLoggedIn } = require("./middlewares");
const { addFollowing } = require("../controllers/user");
const router = require("express").Router();

router.post("/:id/follow", isLoggedIn, addFollowing);
module.exports = router;
