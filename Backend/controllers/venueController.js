const Venue = require("../models/Venue");

// Add a new venue
exports.addVenue = async (req, res) => {
  try {
    const { name, location, capacity, availableDates, amenities } = req.body;

    const newVenue = await Venue.create({
      name,
      location,
      capacity,
      availableDates,
      amenities,
    });

    res.status(201).json(newVenue);
  } catch (error) {
    res.status(500).json({ message: "Error adding venue", error });
  }
};

// Get all venues
exports.getAllVenues = async (req, res) => {
  try {
    const venues = await Venue.find();
    res.status(200).json(venues);
  } catch (error) {
    res.status(500).json({ message: "Error fetching venues", error });
  }
};

// Get a specific venue by ID
exports.getVenueById = async (req, res) => {
  try {
    const venue = await Venue.findById(req.params.id);
    if (!venue) {
      return res.status(404).json({ message: "Venue not found" });
    }
    res.status(200).json(venue);
  } catch (error) {
    res.status(500).json({ message: "Error fetching venue", error });
  }
};

// Update a venue by ID
exports.updateVenue = async (req, res) => {
  try {
    const updatedVenue = await Venue.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedVenue) {
      return res.status(404).json({ message: "Venue not found" });
    }
    res.status(200).json(updatedVenue);
  } catch (error) {
    res.status(500).json({ message: "Error updating venue", error });
  }
};

// Delete a venue by ID
exports.deleteVenue = async (req, res) => {
  try {
    const deletedVenue = await Venue.findByIdAndDelete(req.params.id);
    if (!deletedVenue) {
      return res.status(404).json({ message: "Venue not found" });
    }
    res.status(200).json({ message: "Venue deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting venue", error });
  }
};
