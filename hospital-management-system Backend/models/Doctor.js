const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  specialization: {
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
  experience: {
    type: Number,
    required: true,
  },
  available: {
    type: Boolean,
    default: true, // True if available, False if not
  },
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
