const express = require("express")
const Razorpay = require("razorpay")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

const razorpay = new Razorpay({
  key_id:"rzp_test_SS7LhR6CQXXuvA",
  key_secret: "QbH148gStR96w4tpheA3Cbpf",
})

app.post("/create-order", async (req, res) => {
  const options = {
    amount: 50000, // amount in paise (₹500)
    currency: "INR",
    receipt: "order_rcptid_11",
  }

  try {
    const order = await razorpay.orders.create(options)
    res.json(order)
  } catch (error) {
    res.status(500).send(error)
  }
})

app.listen(5000, () => console.log("Server running"))