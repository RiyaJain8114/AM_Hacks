const mongoose = require('mongoose');

const SponsorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    contactPerson: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      match: [/.+\@.+\..+/, 'Please enter a valid email address'],
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    sponsorshipAmount: {
      type: Number,
      required: true,
      min: 0,
    },
    sponsoredEvents: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event', // Reference to Event model
      },
    ],
  },
  {
    timestamps: true, // Auto-adds createdAt & updatedAt
  }
);

module.exports = mongoose.model('Sponsor', SponsorSchema);
