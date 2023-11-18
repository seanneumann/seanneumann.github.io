require('dotenv').config();

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function generateResponse() {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "Translate the following English text to French: 'Hello, how are you?'",
      max_tokens: 60,
    });
    console.log(response.data.choices[0].text.trim());
  } catch (error) {
    console.error(error);
  }
}

generateResponse();
