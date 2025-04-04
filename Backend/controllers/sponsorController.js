const Sponsor = require("../models/Sponsor");

// Add a new sponsor
exports.addSponsor = async (req, res) => {
  try {
    const { name, company, email, phone, amount, eventId } = req.body;

    const newSponsor = await Sponsor.create({
      name,
      company,
      email,
      phone,
      amount,
      eventId
    });

    res.status(201).json(newSponsor);
  } catch (error) {
    res.status(500).json({ message: "Error adding sponsor", error });
  }
};

// Get all sponsors
exports.getAllSponsors = async (req, res) => {
  try {
    const sponsors = await Sponsor.find();
    res.status(200).json(sponsors);
  } catch (error) {
    res.status(500).json({ message: "Error fetching sponsors", error });
  }
};

// Get a specific sponsor by ID
exports.getSponsorById = async (req, res) => {
  try {
    const sponsor = await Sponsor.findById(req.params.id);
    if (!sponsor) {
      return res.status(404).json({ message: "Sponsor not found" });
    }
    res.status(200).json(sponsor);
  } catch (error) {
    res.status(500).json({ message: "Error fetching sponsor", error });
  }
};

// Update a sponsor by ID
exports.updateSponsor = async (req, res) => {
  try {
    const updatedSponsor = await Sponsor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedSponsor) {
      return res.status(404).json({ message: "Sponsor not found" });
    }
    res.status(200).json(updatedSponsor);
  } catch (error) {
    res.status(500).json({ message: "Error updating sponsor", error });
  }
};

// Delete a sponsor by ID
exports.deleteSponsor = async (req, res) => {
  try {
    const deletedSponsor = await Sponsor.findByIdAndDelete(req.params.id);
    if (!deletedSponsor) {
      return res.status(404).json({ message: "Sponsor not found" });
    }
    res.status(200).json({ message: "Sponsor deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting sponsor", error });
  }
};
