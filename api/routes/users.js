const User = require("$models/user");
const { verifyIsAdmin, verifyUserOrIsAdmin } = require("../middlewares/verify");
const router = require("express").Router();

//get user
router.get("/one/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    !user && res.status(404).json("user not found");
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//get all user
router.get("/all", verifyIsAdmin, async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//get user stats
router.get("/stats", verifyIsAdmin, async (req, res) => {
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
router.put("/:id", verifyUserOrIsAdmin, async (req, res) => {
  try {
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
router.delete("/:id", verifyUserOrIsAdmin, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    return res.status(200).json("user has been deleted");
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
