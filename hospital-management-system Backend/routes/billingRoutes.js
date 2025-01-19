const express = require('express');
const mongoose = require('mongoose'); 
const Billing = require('../models/Billing');
const Patient = require('../models/Patient');
const Doctor = require('../models/Doctor');
const Appointment = require('../models/Appointment');
const router = express.Router();

// Create a new billing record
router.post('/generate', async (req, res) => {
  const { patientId, doctorId, appointmentId, totalAmount } = req.body;

  try {
    // Check if the patient, doctor, and appointment exist
    const patient = await Patient.findById(patientId);
    const doctor = await Doctor.findById(doctorId);
    const appointment = await Appointment.findById(appointmentId);

    if (!patient || !doctor || !appointment) {
      return res.status(404).json({ message: 'Patient, Doctor, or Appointment not found' });
    }

    const newBilling = new Billing({
      patient: patientId,
      doctor: doctorId,
      appointment: appointmentId,
      totalAmount,
    });

    await newBilling.save();
    res.status(201).json({ message: 'Billing record generated successfully', billing: newBilling });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all billing records
router.get('/all', async (req, res) => {
  try {
    const billings = await Billing.find()
      .populate('patient', 'name')
      .populate('doctor', 'name specialization')
      .populate('appointment', 'appointmentDate status')
      .exec();

    res.status(200).json({ billings });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get billing records by patient ID
router.get('/patient/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const billings = await Billing.find({ patient: id })
      .populate('doctor', 'name specialization')
      .populate('appointment', 'appointmentDate')
      .exec();

    if (!billings) {
      return res.status(404).json({ message: 'No billing records found for this patient' });
    }

    res.status(200).json({ billings });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update billing payment status
router.put('/update/:id', async (req, res) => {
  const { id } = req.params;
  const { paymentStatus } = req.body;

  try {
    const billing = await Billing.findById(id);
    if (!billing) {
      return res.status(404).json({ message: 'Billing record not found' });
    }

    billing.paymentStatus = paymentStatus || billing.paymentStatus;

    await billing.save();
    res.status(200).json({ message: 'Billing updated successfully', billing });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete billing record
router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const billing = await Billing.findById(id);
    if (!billing) {
      return res.status(404).json({ message: 'Billing record not found' });
    }

    await billing.deleteOne();
    res.status(200).json({ message: 'Billing record deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
