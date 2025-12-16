const express = require("express");
const router = express.Router();
const Order = require("./model/order");

router.get("/", (req, res) => {
  res.send("index.html");
});

router.get("/placeorder", (req, res) => {
  res.render("placeorder");
});

router.post("/placeorder", async (req, res) => {
  try {
    const orderData = {
      name: req.body.name,
      event: req.body.event,
      dueDate: req.body.dueDate,
      top: req.body.top,
      topSize: req.body.topSize,
      bottom: req.body.bottom,
      bottomSize: req.body.bottomSize,
      shoes: req.body.shoes,
      shoesSize: req.body.shoesSize,
      accessories: req.body.accessories,
      instructions: req.body.instructions,
    };

    const newOrder = new Order(orderData);
    await newOrder.save();

    res.redirect("/ordersuccess");
  } catch (error) {
    console.error("Error saving order:", error);
    res.status(500).send("Error placing order. Please try again.");
  }
});

router.get("/ordersuccess", (req, res) => {
  res.render("ordersuccess");
});

router.get("/getinspirations", (req, res) => {
  res.render("getinspirations");
});

router.get("/revieworders", async (req, res) => {
  try {
    const { name, date } = req.query;
    let filter = {};

    if (name) {
      filter.name = { $regex: name, $options: "i" };
    }

    if (date) {
      const searchDate = new Date(date);
      const nextDay = new Date(searchDate);
      nextDay.setDate(nextDay.getDate() + 1);
      filter.dueDate = { $gte: searchDate, $lt: nextDay };
    }

    const orders = await Order.find(filter).sort({ dueDate: 1 });

    res.render("revieworders", {
      orders,
      searchName: name || "",
      searchDate: date || "",
    });
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).send("Error loading orders.");
  }
});

router.get("/cancelorder", async (req, res) => {
  try {
    const { name } = req.query;
    let orders = [];

    if (name) {
      orders = await Order.find({ name: { $regex: name, $options: "i" } }).sort(
        { dueDate: 1 }
      );
    }

    res.render("cancelorder", { orders, searchName: name || "" });
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).send("Error loading orders.");
  }
});

router.post("/cancelorder/delete-selected", async (req, res) => {
  try {
    const { orderIds } = req.body;

    if (!orderIds) {
      return res.redirect("/cancelorder");
    }

    // Handle single or multiple order IDs
    const idsToDelete = Array.isArray(orderIds) ? orderIds : [orderIds];

    await Order.deleteMany({ _id: { $in: idsToDelete } });

    res.redirect("/cancelorder");
  } catch (error) {
    console.error("Error deleting orders:", error);
    res.status(500).send("Error canceling orders.");
  }
});

module.exports = router;
