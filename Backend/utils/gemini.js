const axios = require("axios");

const getGeminiResponse = async (query) => {
  try {
    const API_KEY = process.env.GEMINI_API_KEY;
    if (!API_KEY) throw new Error("GEMINI_API_KEY is not set");

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
      {
        contents: [{ parts: [{ text: query }] }] // Correct request format
      },
      {
        headers: { "Content-Type": "application/json" }
      }
    );

    // Return only the text response
    return response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response from Gemini";
  } catch (error) {
    console.error("Error calling Gemini API:", error.response?.data || error.message);
    throw error;
  }
};

module.exports = getGeminiResponse;


