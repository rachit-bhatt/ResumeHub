const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: Object, required: true },
}, {
  timestamps: true,
});

const Resume = mongoose.model('Resume', resumeSchema);

module.exports = Resume;