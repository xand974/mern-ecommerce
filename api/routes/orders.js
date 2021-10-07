const Order = require("$models/order");
const {
  verifyUserOrIsAdmin,
  verifyIsAdmin,
  verifyToken,
} = require("../middlewares/verify");
const router = require("express").Router();

//create order
router.post("/add", verifyToken, async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();

    return res.status(200).json(newOrder);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//get order
router.get("/one/:id", [verifyToken], async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    !order && res.status(404).json("order not found");
  } catch (err) {
    return res.status(500).json(err);
  }
});

//get all order
router.get("/all", [verifyToken, verifyIsAdmin], async (req, res) => {
  try {
    const orders = await Order.find({});
    return res.status(200).json(orders);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//get order stats
router.get("/stats", [verifyToken, verifyIsAdmin], async (req, res) => {
  try {
  } catch (err) {
    return res.status(500).json(err);
  }
});

//update order
router.put("/:id", [verifyToken, verifyUserOrIsAdmin], async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    return res.status(200).json(updatedOrder);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//delete order
router.delete("/:id", [verifyToken, verifyUserOrIsAdmin], async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    return res.status(200).json("order has been deleted");
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
