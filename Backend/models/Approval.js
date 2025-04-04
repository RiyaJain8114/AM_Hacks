const mongoose = require("mongoose");

const approvalSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["event", "budget", "resource"], // Restrict type to these values
      required: true,
    },
    entityId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      refPath: "type", // Dynamic reference based on type
    },
    requestedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // References the User model
      required: true,
    },
    approvedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // References the User model
      default: null, // Initially null, updated when approved/rejected
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    comments: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

module.exports = mongoose.model("Approval", approvalSchema);
