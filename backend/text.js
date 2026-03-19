const { GoogleGenAI } = require("@google/genai");
require("dotenv").config();

const genAI = new GoogleGenAI(process.env.GEMINI_API_KEY);
const client = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});
async function listmodels() {
    const models = await client.models.list();
    console.log(models)
    for (let model of models) {
        console.log(model.name);
    }
}

console.log(listmodels())