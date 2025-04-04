const Approval = require("../models/Approval");

// Create a new approval request
exports.createApproval = async (req, res) => {
  try {
    const { requester, event, status } = req.body;

    const newApproval = await Approval.create({
      requester,
      event,
      status: status || "Pending", // Default status is "Pending"
    });

    res.status(201).json(newApproval);
  } catch (error) {
    res.status(500).json({ message: "Error creating approval request", error });
  }
};

// Get all approval requests
exports.getAllApprovals = async (req, res) => {
  try {
    const approvals = await Approval.find().populate("requester event");
    res.status(200).json(approvals);
  } catch (error) {
    res.status(500).json({ message: "Error fetching approval requests", error });
  }
};

// Get a specific approval request by ID
exports.getApprovalById = async (req, res) => {
  try {
    const approval = await Approval.findById(req.params.id).populate("requester event");
    if (!approval) {
      return res.status(404).json({ message: "Approval request not found" });
    }
    res.status(200).json(approval);
  } catch (error) {
    res.status(500).json({ message: "Error fetching approval request", error });
  }
};

// Update approval request status
exports.updateApprovalStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const updatedApproval = await Approval.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!updatedApproval) {
      return res.status(404).json({ message: "Approval request not found" });
    }
    
    res.status(200).json(updatedApproval);
  } catch (error) {
    res.status(500).json({ message: "Error updating approval request", error });
  }
};
