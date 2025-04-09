const express = require("express");
const {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
  registerForEvent,
} = require("../controllers/eventController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Create a new event
router.post("/", protect, createEvent);

// Get all events
router.get("/", getAllEvents);

// Get a specific event by ID
router.get("/:id", getEventById);

// Update an event by ID
router.put("/:id", protect, updateEvent);

// Delete an event by ID
router.delete("/:id", protect, deleteEvent);

// Register for an event
router.post("/:id/register", protect, registerForEvent);

module.exports = router;
