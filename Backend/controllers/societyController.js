const Society = require("../models/Society");
const User = require("../models/User");

// Create a new society
exports.createSociety = async (req, res) => {
  try {
    const { name, description, president, members } = req.body;

    const newSociety = await Society.create({
      name,
      description,
      president,
      members: members || [],
    });

    res.status(201).json(newSociety);
  } catch (error) {
    res.status(500).json({ message: "Error creating society", error });
  }
};

// Get all societies
exports.getAllSocieties = async (req, res) => {
  try {
    const societies = await Society.find();
    res.status(200).json(societies);
  } catch (error) {
    res.status(500).json({ message: "Error fetching societies", error });
  }
};

// Get a specific society by ID
exports.getSocietyById = async (req, res) => {
  try {
    const society = await Society.findById(req.params.id);
    if (!society) {
      return res.status(404).json({ message: "Society not found" });
    }
    res.status(200).json(society);
  } catch (error) {
    res.status(500).json({ message: "Error fetching society", error });
  }
};

// Update a society by ID
exports.updateSociety = async (req, res) => {
  try {
    const updatedSociety = await Society.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedSociety) {
      return res.status(404).json({ message: "Society not found" });
    }
    res.status(200).json(updatedSociety);
  } catch (error) {
    res.status(500).json({ message: "Error updating society", error });
  }
};

// Delete a society by ID
exports.deleteSociety = async (req, res) => {
  try {
    const deletedSociety = await Society.findByIdAndDelete(req.params.id);
    if (!deletedSociety) {
      return res.status(404).json({ message: "Society not found" });
    }
    res.status(200).json({ message: "Society deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting society", error });
  }
};

// Add a member to a society
exports.addMember = async (req, res) => {
  try {
    const society = await Society.findById(req.params.id);
    const userId = req.body.userId;

    if (!society) {
      return res.status(404).json({ message: "Society not found" });
    }

    if (!society.members.includes(userId)) {
      society.members.push(userId);
      await society.save();
    }

    res.status(200).json({ message: "Member added", society });
  } catch (error) {
    res.status(500).json({ message: "Error adding member", error });
  }
};

// Remove a member from a society
exports.removeMember = async (req, res) => {
  try {
    const society = await Society.findById(req.params.id);
    const userId = req.params.userId;

    if (!society) {
      return res.status(404).json({ message: "Society not found" });
    }

    society.members = society.members.filter(
      (memberId) => memberId.toString() !== userId
    );
    await society.save();

    res.status(200).json({ message: "Member removed", society });
  } catch (error) {
    res.status(500).json({ message: "Error removing member", error });
  }
};
