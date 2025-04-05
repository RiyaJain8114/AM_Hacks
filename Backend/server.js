require("dotenv").config();
console.log("GEMINI_API_KEY:", process.env.GEMINI_API_KEY);  // Debugging log

const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

// Import routes
const authRoutes = require("./routes/authRoutes"); 
const eventRoutes = require("./routes/eventRoutes");
const societyRoutes = require("./routes/societyRoutes");
const sponsorRoutes = require("./routes/sponsorRoutes");
const venueRoutes = require("./routes/venueRoutes");
const approvalRoutes = require("./routes/approvalRoutes");
const budgetRoutes = require("./routes/budgetRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const chatbotRoutes = require("./routes/chatbotRoutes");

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

connectDB();  // Connect to database

// ✅ Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/event", eventRoutes);
app.use("/api/v1/society", societyRoutes);
app.use("/api/v1/sponsor", sponsorRoutes);
app.use("/api/v1/venue", venueRoutes);
app.use("/api/v1/approval", approvalRoutes);
app.use("/api/v1/budget", budgetRoutes);
app.use("/api/v1/dashboard", dashboardRoutes);
app.use("/api/v1/chat", chatbotRoutes);

// Serve uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

