const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    date: { type: Date, required: true },
    venue: { type: String, required: true },
    organizer: {
      societyId: { type: mongoose.Schema.Types.ObjectId, ref: "Society", required: true },
      societyName: { type: String, required: true }
    },
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    budget: { type: Number, required: true },
    status: { type: String, enum: ["planned", "approved", "completed"], default: "planned" },
    resources: [{ type: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", EventSchema);
