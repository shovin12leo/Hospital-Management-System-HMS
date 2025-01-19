const express = require('express');
const mongoose = require('mongoose'); 
const Patient = require('../models/Patient');
const Doctor = require('../models/Doctor');
const router = express.Router();

// Create a new patient
router.post('/add', async (req, res) => {
    const { name, age, gender, contact, email, address, medicalHistory, currentMedications, doctorAssigned } = req.body;
  
    try {
      // Validate doctorAssigned is a valid ObjectId
      if (!mongoose.Types.ObjectId.isValid(doctorAssigned)) {
        return res.status(400).json({ message: 'Invalid doctor ID' });
      }
  
      // Check if the doctor exists
      const doctor = await Doctor.findById(doctorAssigned);
      if (!doctor) {
        return res.status(404).json({ message: 'Assigned doctor not found' });
      }
  
      // Check if patient with the same email already exists
      const existingPatient = await Patient.findOne({ email });
      if (existingPatient) {
        return res.status(400).json({ message: 'Patient with this email already exists' });
      }
  
      const newPatient = new Patient({
        name,
        age,
        gender,
        contact,
        email,
        address,
        medicalHistory,
        currentMedications,
        doctorAssigned,
      });
  
      await newPatient.save();
      res.status(201).json({ message: 'Patient added successfully', patient: newPatient });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  });
  
// Get all patients
router.get('/all', async (req, res) => {
  try {
    const patients = await Patient.find().populate('doctorAssigned', 'name specialization');
    res.status(200).json({ patients });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get patient by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const patient = await Patient.findById(id).populate('doctorAssigned', 'name specialization');
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    res.status(200).json({ patient });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update patient details
router.put('/update/:id', async (req, res) => {
  const { id } = req.params;
  const { name, age, gender, contact, email, address, medicalHistory, currentMedications, doctorAssigned } = req.body;

  try {
    const patient = await Patient.findById(id);
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    // Check if the new assigned doctor exists
    if (doctorAssigned) {
      const doctor = await Doctor.findById(doctorAssigned);
      if (!doctor) {
        return res.status(404).json({ message: 'Assigned doctor not found' });
      }
      patient.doctorAssigned = doctorAssigned;
    }

    patient.name = name || patient.name;
    patient.age = age || patient.age;
    patient.gender = gender || patient.gender;
    patient.contact = contact || patient.contact;
    patient.email = email || patient.email;
    patient.address = address || patient.address;
    patient.medicalHistory = medicalHistory || patient.medicalHistory;
    patient.currentMedications = currentMedications || patient.currentMedications;

    await patient.save();
    res.status(200).json({ message: 'Patient updated successfully', patient });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete a patient
router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const patient = await Patient.findById(id);
      if (!patient) {
        return res.status(404).json({ message: 'Patient not found' });
      }
  
      // Use findByIdAndDelete instead of remove
      await Patient.findByIdAndDelete(id);
      res.status(200).json({ message: 'Patient deleted successfully' });
    } catch (error) {
      console.error(error); // Log the error for debugging
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  });
  

module.exports = router;
