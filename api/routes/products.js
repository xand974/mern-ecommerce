const Product = require("$models/product");
const router = require("express").Router();

//get product
router.get("/one/:id", async (req, res) => {
  try {
  } catch (err) {
    return res.status(500).json(err);
  }
});

//get all products
router.get("/all", async (req, res) => {
  try {
  } catch (err) {
    return res.status(500).json(err);
  }
});

//get product stats
router.get("/stats", async (req, res) => {
  try {
  } catch (err) {
    return res.status(500).json(err);
  }
});

//update product
router.put("/:id", async (req, res) => {
  try {
  } catch (err) {
    return res.status(500).json(err);
  }
});

//delete product
router.delete("/:id", async (req, res) => {
  try {
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
