const getGeminiResponse = require("../utils/gemini");

exports.askGemini = async (req, res) => {
  try {
    console.log("Received query:", req.body.query);  // Debug log

    const response = await getGeminiResponse(req.body.query);
    console.log("Gemini Response:", response);  // Debug log

    res.status(200).json({ reply: response });
  } catch (err) {
    console.error("Failed to get response from Gemini:", err);
    res.status(500).json({
      error: "Failed to get response from Gemini",
      details: err.response?.data || err.message,  // Show actual API error
    });
  }
};
