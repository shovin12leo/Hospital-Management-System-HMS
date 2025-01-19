const express = require('express');
const mongoose = require('mongoose');  // Add this line to fix the issue
const Doctor = require('../models/Doctor');
const router = express.Router();

// Add a new doctor
router.post('/add', async (req, res) => {
  const { name, specialization, contact, email, experience, available } = req.body;

  try {
    // Check if doctor with the same email already exists
    const existingDoctor = await Doctor.findOne({ email });
    if (existingDoctor) {
      return res.status(400).json({ message: 'Doctor with this email already exists' });
    }

    // Create and save doctor
    const newDoctor = new Doctor({
      name,
      specialization,
      contact,
      email,
      experience,
      available,
    });

    await newDoctor.save();
    res.status(201).json({ message: 'Doctor added successfully', doctor: newDoctor });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update doctor details
router.put('/update/:id', async (req, res) => {
  const { id } = req.params;
  const { name, specialization, contact, email, experience, available } = req.body;

  try {
    const doctor = await Doctor.findById(id);
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    doctor.name = name || doctor.name;
    doctor.specialization = specialization || doctor.specialization;
    doctor.contact = contact || doctor.contact;
    doctor.email = email || doctor.email;
    doctor.experience = experience || doctor.experience;
    doctor.available = available !== undefined ? available : doctor.available;

    await doctor.save();
    res.status(200).json({ message: 'Doctor updated successfully', doctor });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete a doctor
router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const doctor = await Doctor.findByIdAndDelete(id);
      if (!doctor) {
        return res.status(404).json({ message: 'Doctor not found' });
      }
  
      res.status(200).json({ message: 'Doctor deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  });

// Get all doctors
router.get('/all', async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json({ doctors });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
