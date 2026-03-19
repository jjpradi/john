const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { GoogleGenAI } = require("@google/genai");

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});
app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;

  const result = await genAI.models.generateContent({
  model: "gemini-2.5-flash",   // recommended
  contents:
  `You are a shopping assistant for NxtTrendz.

Use the below data to answer:

${userMessage}
  `
});

    

    const reply = result.text;

    res.json({ reply });

  } catch (err) {
    console.error(err);

    res.json({
      reply: "Error: " + err.message
    });
  }
});

app.listen(5000, () => console.log("Server running on 5000"));