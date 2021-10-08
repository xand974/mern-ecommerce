const User = require("$models/user");
const {
  verifyIsAdmin,
  verifyUserOrIsAdmin,
  verifyToken,
} = require("../middlewares/verify");
const bcrypt = require("bcrypt");
const router = require("express").Router();

//get user
router.get("/one/:id", [verifyToken, verifyIsAdmin], async (req, res) => {
  try {
    const user = User.findById(req.params.id);
    !user && res.status(404).json("user not found");
    const { password, ...rest } = user._doc;
    return res.status(200).json(rest);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//get all user
router.get("/all", [verifyToken, verifyIsAdmin], async (req, res) => {
  const query = req.query.new;
  try {
    const users = query
      ? await User.find({}).sort({ _id: -1 }).limit(5)
      : await User.find({});
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//get user stats
router.get("/stats", [verifyToken, verifyIsAdmin], async (req, res) => {
  try {
    const stats = await User.aggregate([
      { $project: { month: { $month: "$createdAt" } } },
      { $group: { _id: "$month", total: { $sum: 1 } } },
    ]);
    return res.status(200).json(stats);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//update user
router.put("/:id", [verifyToken, verifyUserOrIsAdmin], async (req, res) => {
  const { password } = req.body;
  try {
    if (password) {
      const NEW_SALT = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, NEW_SALT);
    }
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    return res.status(200).json(updatedUser);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//delete user
router.delete("/:id", [verifyToken, verifyUserOrIsAdmin], async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    return res.status(200).json("user has been deleted");
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
