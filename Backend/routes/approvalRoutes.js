const express = require("express");
const {
  createApproval,
  getAllApprovals,
  getApprovalById,
  updateApprovalStatus,
} = require("../controllers/approvalController");

const router = express.Router();

// Create a new approval request
router.post("/", createApproval);

// Get all approval requests
router.get("/", getAllApprovals);

// Get a specific approval request by ID
router.get("/:id", getApprovalById);

// Update an approval request status
router.put("/:id", updateApprovalStatus);

module.exports = router;
