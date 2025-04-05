const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    // Role: Common for both
    role: {
      type: String,
      enum: ["society-head", "college-authority"],
      required: true,
    },

    // Common profile structure
    profile: {
      profilePicture: { type: String, default: null }, // Optional for both
      department: { type: String, required: true },     // Both must have department
      year: {
        type: Number,
        required: function () {
          return this.role === "society-head"; // Only required for society-head
        },
      },
      contactNumber: { type: String, required: true },
    },

    permissions: [{ type: String }] // Optional: can be set later by admin
  },
  { timestamps: true }
);

// Pre-save: Hash password
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Method: Compare password
UserSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model("User", UserSchema);

