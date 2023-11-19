// openai.js
import OpenAI from "openai";
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateResponse() {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "Translate 'Hello, my name is Sean' into French" }],
    });
    console.log(response.choices);
  } catch (error) {
    console.error(error);
  }
}

generateResponse();


