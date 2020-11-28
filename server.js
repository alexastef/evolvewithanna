const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const shortid = require("shortid");

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3001;

mongoose.connect("mongodb://localhost/react-shop", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const Product = mongoose.model("products", new mongoose.Schema({
  _id: {type: String, default: shortid.generate},
  title: String,
  image: String,
  description: String,
  price: Number,
  availableSizes: [String]
}));

app.get("/api/products", async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

app.post("/api/products", async (req, res) => {
  const newProduct = new Product(req.body);
  const savedProduct = await newProduct.save();
  res.send(savedProduct);
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));