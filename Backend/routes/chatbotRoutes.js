const express = require("express");
const router = express.Router();
const { askGemini } = require("../controllers/chatbotController");

router.post("/ask", askGemini);

module.exports = router;
