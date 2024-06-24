const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const resumeRoutes = require('./routes/resumes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/resumes', resumeRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to ResumeHub API');
});

module.exports = app;