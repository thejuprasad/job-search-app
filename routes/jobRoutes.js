<<<<<<< HEAD
// routes/jobRoutes.js

const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

router.post('/search', async (req, res) => {
  const { role, place, experience } = req.body;

  try {
    const jobs = await Job.find({ role, place, experience });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
=======
// routes/jobRoutes.js

const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

router.post('/search', async (req, res) => {
  const { role, place, experience } = req.body;

  try {
    const jobs = await Job.find({ role, place, experience });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
>>>>>>> d865b892f69f79eb2e26381fb355909d3c56952e
