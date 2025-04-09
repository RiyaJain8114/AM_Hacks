const express = require("express");
const { 
  createSociety, 
  getAllSocieties, 
  getSocietyById, 
  updateSociety, 
  deleteSociety, 
  addMember, 
  removeMember 
} = require("../controllers/societyController");
const { protect } = require("../middleware/authMiddleware"); // Middleware for authentication

const router = express.Router();

// Create a new society
router.post("/", protect, createSociety);

// Get all societies
router.get("/", getAllSocieties);

// Get a specific society by ID
router.get("/:id", getSocietyById);

// Update a society by ID
router.put("/:id", protect, updateSociety);

// Delete a society by ID
router.delete("/:id", protect, deleteSociety);

// Add a member to a society
router.post("/:id/members", protect, addMember);

// Remove a member from a society
router.delete("/:id/members/:userId", protect, removeMember);

module.exports = router;
