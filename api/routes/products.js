const Product = require("$models/product");
const { verifyIsAdmin, verifyToken } = require("../middlewares/verify");
const router = require("express").Router();

//create product
router.post("/add", verifyToken, async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();

    return res.status(200).json(newProduct);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//get product
router.get("/one/:id", verifyToken, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    !product && res.status(404).json("product not found");
    return res.status(200).json(product);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//get all products
router.get("/all", [verifyToken, verifyIsAdmin], async (req, res) => {
  try {
    const products = await Product.find({});
    return res.status(200).json(products);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//get product stats
router.get("/stats", [verifyToken, verifyIsAdmin], async (req, res) => {
  try {
  } catch (err) {
    return res.status(500).json(err);
  }
});

//update product
router.put("/:id", [verifyToken, verifyIsAdmin], async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    return res.status(200).json(updatedProduct);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//delete product
router.delete("/:id", [verifyToken, verifyIsAdmin], async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    return res.status(200).json("product has been deleted");
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
