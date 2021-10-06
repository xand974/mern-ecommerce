const Cart = require("$models/cart");
const router = require("express").Router();

//get cart
router.get("/one/:id", async (req, res) => {
  try {
  } catch (err) {
    return res.status(500).json(err);
  }
});

//get all carts
router.get("/all", async (req, res) => {
  try {
  } catch (err) {
    return res.status(500).json(err);
  }
});

//get cart stats
router.get("/stats", async (req, res) => {
  try {
  } catch (err) {
    return res.status(500).json(err);
  }
});

//update cart
router.put("/:id", async (req, res) => {
  try {
  } catch (err) {
    return res.status(500).json(err);
  }
});

//delete cart
router.delete("/:id", async (req, res) => {
  try {
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
