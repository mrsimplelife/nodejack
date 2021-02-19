const { isLoggedIn } = require("./middlewares");

const router = require("express").Router();
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const { Post } = require("../models");
try {
  fs.readdirSync("uploads");
} catch (err) {
  console.error("no uploads");
  fs.mkdirSync("uploads");
}

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, "uploads/");
    },
    filename(req, file, callback) {
      const ext = path.extname(file.originalname);
      callback(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});
router.post("/img", isLoggedIn, upload.single("img"), (req, res) => {
  console.log(req.file);
  res.json({ url: `/img/${req.file.filename}` });
});
router.post("/", isLoggedIn, upload.none(), async (req, res, next) => {
  console.log(req.body);
  console.log(req.user.id);
  try {
    await Post.create({
      content: req.body.content,
      img: req.body.url,
      UserId: req.user.id,
    });
    res.redirect("/");
  } catch (error) {
    console.error(error);
    next(error);
  }
});
module.exports = router;
