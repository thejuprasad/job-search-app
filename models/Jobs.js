// models/Job.js

const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  role: String,
  place: String,
  experience: Number,
});

module.exports = mongoose.model('Job', jobSchema);
