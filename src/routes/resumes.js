const express = require('express');
const jwt = require('jsonwebtoken');
const Resume = require('../models/resume');
const User = require('../models/user');

const router = express.Router();

// Middleware to authenticate and set req.user
router.use(async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
});

router.post('/', async (req, res) => {
  const { content } = req.body;

  try {
    const resume = new Resume({ userId: req.user._id, content });
    await resume.save();
    res.status(201).json({ message: 'Resume created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create resume' });
  }
});

router.get('/', async (req, res) => {
  try {
    const resumes = await Resume.find({ userId: req.user._id });
    res.json(resumes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch resumes' });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;

  try {
    const resume = await Resume.findOneAndUpdate(
      { _id: id, userId: req.user._id },
      { content },
      { new: true }
    );
    if (!resume) {
      return res.status(404).json({ error: 'Resume not found' });
    }
    res.json(resume);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update resume' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const resume = await Resume.findOneAndDelete({ _id: id, userId: req.user._id });
    if (!resume) {
      return res.status(404).json({ error: 'Resume not found' });
    }
    res.json({ message: 'Resume deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete resume' });
  }
});

module.exports = router;