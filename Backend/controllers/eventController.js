const Event = require("../models/Event");

// Create a new event
exports.createEvent = async (req, res) => {
    try {
      const { title, description, date, venue, organizer, participants, budget, status, resources } = req.body;
  
      // Creating the event with required fields
      const event = await Event.create({
        title,
        description,
        date,
        venue,
        organizer,
        participants: participants || [], // Default empty array if not provided
        budget,
        status: status || "planned", // Default status to "planned"
        resources: resources || [], // Default empty array if not provided
      });
  
      res.status(201).json(event);
    } catch (error) {
      res.status(500).json({ message: "Error creating event", error });
    }
  };

// Get all events
exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: "Error fetching events", error });
  }
};

// Get a specific event by ID
exports.getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: "Error fetching event", error });
  }
};

// Update an event by ID
exports.updateEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: "Error updating event", error });
  }
};

// Delete an event by ID
exports.deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting event", error });
  }
};

// Register for an event
exports.registerForEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    if (!event.participants.includes(req.user.id)) {
      event.participants.push(req.user.id);
      await event.save();
    }
    res.status(200).json({ message: "Registered successfully", event });
  } catch (error) {
    res.status(500).json({ message: "Error registering for event", error });
  }
};
