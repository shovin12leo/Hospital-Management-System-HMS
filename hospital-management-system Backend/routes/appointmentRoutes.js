const express = require('express');
const mongoose = require('mongoose'); 
const Appointment = require('../models/Appointment');
const Patient = require('../models/Patient');
const Doctor = require('../models/Doctor');
const router = express.Router();

// Create a new appointment
router.post('/book', async (req, res) => {
  const { patientId, doctorId, appointmentDate, notes } = req.body;

  try {
    // Check if the patient and doctor exist
    const patient = await Patient.findById(patientId);
    const doctor = await Doctor.findById(doctorId);

    if (!patient || !doctor) {
      return res.status(404).json({ message: 'Patient or Doctor not found' });
    }

    const newAppointment = new Appointment({
      patient: patientId,
      doctor: doctorId,
      appointmentDate,
      notes,
    });

    await newAppointment.save();
    res.status(201).json({ message: 'Appointment booked successfully', appointment: newAppointment });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all appointments
router.get('/all', async (req, res) => {
  try {
    const appointments = await Appointment.find()
      .populate('patient', 'name')
      .populate('doctor', 'name specialization')
      .exec();

    res.status(200).json({ appointments });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get appointments by patient ID
router.get('/patient/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const appointments = await Appointment.find({ patient: id })
      .populate('doctor', 'name specialization')
      .exec();

    if (!appointments) {
      return res.status(404).json({ message: 'No appointments found for this patient' });
    }

    res.status(200).json({ appointments });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update appointment status
router.put('/update/:id', async (req, res) => {
  const { id } = req.params;
  const { status, notes } = req.body;

  try {
    const appointment = await Appointment.findById(id);
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    appointment.status = status || appointment.status;
    appointment.notes = notes || appointment.notes;

    await appointment.save();
    res.status(200).json({ message: 'Appointment updated successfully', appointment });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete appointment
router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const appointment = await Appointment.findById(id);
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    await appointment.deleteOne();
    res.status(200).json({ message: 'Appointment deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
