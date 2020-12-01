const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config({ path: "./.env" });
const path = require("path");
const stripe = require('stripe')(process.env.STRIPE_SECRET_PRODUCTION);
const { v4: uuidv4 } = require("uuid");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 3001;

// serve static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    // res.sendFile(path.join(__dirname, "./client/build/index.html"));
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));

  });
}

// database
mongoose.connect(
  process.env.MONGODB_URL || "mongodb://localhost/ewa-orders",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }
);

const Order = mongoose.model("orders", new mongoose.Schema({
  order_id: String,
  name: String,
  shipping: {
    line1: String,
    line2: String,
    city: String,
    state: String,
    postal_code: String
  },
  items_ordered: [Array]
}));

// middelware
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.post("/payment", cors(), async (req, res) => {
  let error;
  let status;
  try {
    const { amount, product, token } = req.body;

    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id
    });

    const idempotencyKey = uuidv4();

    const charge = await stripe.charges.create({
      amount: amount,
      currency: "usd",
      customer: customer.id,
      receipt_email: token.email,
      description: "Evolve with Anna x Vuori",
      shipping: {
        name: token.card.name,
        address: {
          line1: token.card.address_line1,
          line2: token.card.address_line2,
          city: token.card.address_city,
          state: token.card.address_state,
          country: token.card.address_country,
          postal_code: token.card.address_zip
        }
      },
      metadata: {
        style_number: product.title,
        size: product.size
      }
    }, {idempotencyKey}
    );
    console.log("Charge: ", charge);
    status = "success";

    console.log(
      "PRODUCT: ", product
    )
    const customer_order =  {
      order_id: charge.id,
      name: charge.billing_details.name,
      shipping: {
        line1: charge.shipping.address.line1,
        line2: charge.shipping.address.line2,
        city: charge.shipping.address.city,
        state: charge.shipping.address.state,
        postal_code: charge.shipping.address.postal_code
      },
      items_ordered: product
    };
    const insertOrder = await Order(customer_order).save();

  } catch (error) {
    console.log("ERROR", error);
    status = "failed"
  }
  res.json({ error, status });
});

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));