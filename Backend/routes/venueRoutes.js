const express = require("express");
const {
  addSponsor,
  getAllSponsors,
  getSponsorById,
  updateSponsor,
  deleteSponsor
} = require("../controllers/sponsorController");

const { protect } = require("../middleware/authMiddleware"); // Middleware for authentication

const router = express.Router();

// Add a new sponsor (protected route)
router.post("/", protect, addSponsor);

// Get all sponsors
router.get("/", getAllSponsors);

// Get a specific sponsor by ID
router.get("/:id", getSponsorById);

// Update a sponsor by ID (protected route)
router.put("/:id", protect, updateSponsor);

// Delete a sponsor by ID (protected route)
router.delete("/:id", protect, deleteSponsor);

module.exports = router;
