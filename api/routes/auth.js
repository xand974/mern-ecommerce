const User = require("../models/user");
const bcrypt = require("bcrypt");
const generateAccessToken = require("../helpers/token");
const router = require("express").Router();

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

module.exports = router;
