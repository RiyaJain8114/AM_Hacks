const Budget = require("../models/Budget");

// Create a new budget request
exports.createBudget = async (req, res) => {
  try {
    const { eventId, requestedBy, amount, status, comments } = req.body;

    const newBudget = await Budget.create({
      eventId,
      requestedBy,
      amount,
      status: status || "pending", // Default status is 'pending'
      comments,
    });

    res.status(201).json(newBudget);
  } catch (error) {
    res.status(500).json({ message: "Error creating budget request", error });
  }
};

// Get all budget requests
exports.getAllBudgets = async (req, res) => {
  try {
    const budgets = await Budget.find().populate("eventId requestedBy");
    res.status(200).json(budgets);
  } catch (error) {
    res.status(500).json({ message: "Error fetching budget requests", error });
  }
};

// Get a specific budget request by ID
exports.getBudgetById = async (req, res) => {
  try {
    const budget = await Budget.findById(req.params.id).populate("eventId requestedBy");
    if (!budget) {
      return res.status(404).json({ message: "Budget request not found" });
    }
    res.status(200).json(budget);
  } catch (error) {
    res.status(500).json({ message: "Error fetching budget request", error });
  }
};

// Update a budget request by ID
exports.updateBudget = async (req, res) => {
  try {
    const updatedBudget = await Budget.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedBudget) {
      return res.status(404).json({ message: "Budget request not found" });
    }
    
    res.status(200).json(updatedBudget);
  } catch (error) {
    res.status(500).json({ message: "Error updating budget request", error });
  }
};
