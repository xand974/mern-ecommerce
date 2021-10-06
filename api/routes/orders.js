const Order = require("$models/order");
const router = require("express").Router();

//get order
router.get("/one/:id", async (req, res) => {
  try {
  } catch (err) {
    return res.status(500).json(err);
  }
});

//get all order
router.get("/all", async (req, res) => {
  try {
  } catch (err) {
    return res.status(500).json(err);
  }
});

//get order stats
router.get("/stats", async (req, res) => {
  try {
  } catch (err) {
    return res.status(500).json(err);
  }
});

//update order
router.put("/:id", async (req, res) => {
  try {
  } catch (err) {
    return res.status(500).json(err);
  }
});

//delete order
router.delete("/:id", async (req, res) => {
  try {
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
