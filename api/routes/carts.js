const Cart = require("$models/cart");
const {
  verifyIsAdmin,
  verifyUserOrIsAdmin,
  verifyToken,
} = require("../middlewares/verify");
const router = require("express").Router();

//create
router.post("/add", [verifyToken], async (req, res) => {
  try {
    const newCart = new Cart(req.body);
    await newCart.save();
    return res.status(200).json(newCart);
  } catch (err) {
    return res.status(500).json(err);
  }
});
//get cart
router.get("/one/:id", [verifyToken, verifyUserOrIsAdmin], async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);
    !cart && res.status(404).json("cart not found");
  } catch (err) {
    return res.status(500).json(err);
  }
});

//get all carts
router.get("/all", [verifyToken, verifyIsAdmin], async (req, res) => {
  try {
    const carts = await Order.find({});
    return res.status(200).json(carts);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//get cart stats
router.get("/stats", [verifyToken, verifyIsAdmin], async (req, res) => {
  try {
    const stats = Cart.aggregate([
      {
        $project: { year: { $year: "$createdAt" } },
        $group: { _id: year, total: { $sum: 1 } },
      },
    ]);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//update cart
router.put("/:id", [verifyToken, verifyUserOrIsAdmin], async (req, res) => {
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
router.delete("/:id", [verifyToken, verifyUserOrIsAdmin], async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    return res.status(200).json("cart has been deleted");
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
