const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  medicalHistory: {
    type: [String], // Array of past medical conditions
    default: [],
  },
  currentMedications: {
    type: [String], // Array of current medications
    default: [],
  },
  doctorAssigned: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor', // Reference to Doctor model
    required: true,
  },
  admissionDate: {
    type: Date,
    default: Date.now,
  },
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
