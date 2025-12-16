const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  event: {
    type: String,
    required: true
  },
  dueDate: {
    type: Date,
    required: true
  },
  top: {
    type: String,
    enum: ["", "t-shirt", "blouse", "sweater", "hoodie", "jacket"]
  },
  topSize: {
    type: String
  },
  bottom: {
    type: String,
    enum: ["", "jeans", "pants", "shorts", "skirt", "leggings"]
  },
  bottomSize: {
    type: String
  },
  dress: {
    type: String,
    enum: ["", "casual-dress", "formal-dress", "cocktail-dress", "maxi-dress", "midi-dress", "mini-dress"]
  },
  dressSize: {
    type: String
  },
  shoes: {
    type: String,
    enum: ["", "sneakers", "boots", "sandals", "heels", "flats"]
  },
  shoesSize: {
    type: String
  },
  accessories: {
    type: String,
    enum: ["", "hat", "scarf", "belt", "jewelry", "bag", "sunglasses"]
  },
  instructions: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
