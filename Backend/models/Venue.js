const mongoose = require("mongoose");

const venueSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    capacity: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    availableDates: {
      type: [Date],
      required: true,
    },
    bookedEvents: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event", // References the Event model
      },
    ],
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

module.exports = mongoose.model("Venue", venueSchema);
