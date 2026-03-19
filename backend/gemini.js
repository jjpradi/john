const {GoogleGenerativeAI} = require('@google/generative-ai')

const genAI = new GoogleGenerativeAI('AIzaSyAdZpDICERMPZOnwAlKjYQebXObLkFfh-4')

const model = genAI.getGenerativeModel({

  model: 'models/gemini-pro',

})

async function chatWithGemini(message) {
  
  const result = await model.generateContent(message)
  const response = await result.response
  return response.text()

}










module.exports = chatWithGemini


