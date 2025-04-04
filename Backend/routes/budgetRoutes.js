const express = require("express");
const {
  createBudget,
  getAllBudgets,
  getBudgetById,
  updateBudget,
} = require("../controllers/budgetController");

const router = express.Router();

// Create a new budget request
router.post("/", createBudget);

// Get all budget requests
router.get("/", getAllBudgets);

// Get a specific budget request by ID
router.get("/:id", getBudgetById);

// Update a budget request by ID
router.put("/:id", updateBudget);

module.exports = router;
