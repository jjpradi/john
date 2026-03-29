const express = require('express')
const cors = require('cors')
require('dotenv').config()
const crypto = require("crypto");

const {GoogleGenAI} = require('@google/genai')

const app = express()
app.use(cors())
app.use(express.json())




const genAI = new GoogleGenAI({
  
  apiKey: process.env.GEMINI_API_KEY,
  


})

app.post('/chat', async (req, res) => {
 
  try {

    const userMessage = req.body.message

    const result = await genAI.models.generateContent({
      model: 'gemini-2.5-flash', // recommended
      contents: `You are a shopping assistant for NxtTrendz.

Use the below data to answer:

${userMessage}
  `,
    })

    const reply = result.text

    res.json({reply})
  } catch (err) {
    console.error(err)

    res.json({
      reply: 'Error: ' + err.message,
    })
  }
})




app.post("/create-order", async (req, res) => {

  console.log(req.body)

  const options = {
  
    amount: req.body.amount * 100, // in paise
    currency: "INR",
    receipt: "receipt_order_1",
  
  };

  try {
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (err) {
    res.status(500).send(err);
  }
});



app.post("/verify-payment", (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  const generated_signature = crypto
    .createHmac("sha256", "rzp_test_SS7LhR6CQXXuvA")
    .update(razorpay_order_id + "|" + razorpay_payment_id)
    .digest("hex");

  if (generated_signature === razorpay_signature) {
    res.send({ success: true });
  } else {
    res.send({ success: false });
  }
});



app.listen(5000, () => console.log('Server running on 5000'))

