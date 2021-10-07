const Cart = require("$models/cart");
const { verifyIsAdmin, verifyUserOrIsAdmin } = require("../middlewares/verify");
const router = require("express").Router();

//get cart
router.get("/one/:id", verifyUserOrIsAdmin, async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);
    !cart && res.status(404).json("cart not found");
  } catch (err) {
    return res.status(500).json(err);
  }
});

//get all carts
router.get("/all", verifyIsAdmin, async (req, res) => {
  try {
    const carts = await Order.find({});
    return res.status(200).json(carts);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//get cart stats
router.get("/stats", verifyIsAdmin, async (req, res) => {
  try {
  } catch (err) {
    return res.status(500).json(err);
  }
});

//update cart
router.put("/:id", verifyUserOrIsAdmin, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    return res.status(200).json(updatedCart);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//delete cart
router.delete("/:id", verifyUserOrIsAdmin, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    return res.status(200).json("cart has been deleted");
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
