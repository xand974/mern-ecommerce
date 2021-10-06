const User = require("../models/user");
const bcrypt = require("bcrypt");
const generateAccessToken = require("../helpers/token");
const router = require("express").Router();

//register
router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    user && res.status(401).json("user already exist");

    const salt = await bcrypt.genSalt(10);
    const newPass = await bcrypt.hash(password, salt);

    const savedUser = new User({ username, password: newPass });
    await savedUser.save();

    return res.status(200).json(savedUser);
  } catch (err) {
    return res.status(500).json(err);
  }
});
//login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    !user && res.status(404).json("user not found");

    const isCorrect = await bcrypt.compare(password, user.password);

    if (isCorrect) {
      const { password, ...rest } = user._doc;
      const token = generateAccessToken(rest);

      return res.status(200).json({ user: rest, accessToken: token });
    } else {
      return res.status(403).json("username or password incorrect");
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
