const User = require("$models/user");
const router = require("express").Router();

//get user
router.get("/one/:id", async (req, res) => {
  try {
  } catch (err) {
    return res.status(500).json(err);
  }
});

//get all user
router.get("/all", async (req, res) => {
  try {
  } catch (err) {
    return res.status(500).json(err);
  }
});

//get user stats
router.get("/stats", async (req, res) => {
  try {
  } catch (err) {
    return res.status(500).json(err);
  }
});

//update user
router.put("/:id", async (req, res) => {
  try {
  } catch (err) {
    return res.status(500).json(err);
  }
});

//delete user
router.delete("/:id", async (req, res) => {
  try {
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
