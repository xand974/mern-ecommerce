const User = require("../models/user");
const bcrypt = require("bcrypt");
const generateAccessToken = require("../helpers/token");
const router = require("express").Router();
const jwt = require("jsonwebtoken");

//register
router.post("/register", async (req, res) => {
  const { password } = req.body;
  try {
    const user = await User.findOne({ username: req.body.username });
    const email = await User.findOne({ email: req.body.email });
    console.log(user, email);
    if (user || email) return res.status(401).json("user already exists");

    const salt = await bcrypt.genSalt(10);
    const newPass = await bcrypt.hash(password, salt);

    const savedUser = new User({
      username: req.body.username,
      password: newPass,
    });
    await savedUser.save();

    return res.status(200).json(savedUser);
  } catch (err) {
    return res.status(500).json({ err });
  }
});
//login
router.post("/login", async (req, res) => {
  const { username } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json("user not found");

    const isCorrect = await bcrypt.compare(req.body.password, user.password);
    if (!isCorrect) return res.status(400).json("cannot login");
    const { password, ...rest } = user._doc;
    const token = generateAccessToken(rest);
    return res.status(200).json({ user: rest, accessToken: token });
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.post("/check-auth", (req, res) => {
  try {
    const tokenFromHeader = req.headers.authorization;
    if (!tokenFromHeader)
      return res.status(401).json("you are not authentificated");
    const token = tokenFromHeader.split(" ")[1];

    jwt.verify(token, process.env.SECRET_ACCESS_TOKEN, (err, payload) => {
      if (err) return res.status(403).json("token is not valid");

      req.user = payload;
      return res.status(200).json({ data: "success" });
    });
  } catch (error) {
    return res.status(500).json(err);
  }
});

module.exports = router;
