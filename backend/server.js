const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());  // Parses JSON bodies – missing this causes req.body undefined → crash
app.use(express.static(path.join(__dirname, '../dist')));  // Static before routes
// Then API routes
// Then wildcard: app.get(/.*/, (req, res) => ...);  // Or app.use((req, res) => ...)

// Serve frontend build in production/Docker
app.use(express.static(path.join(__dirname, '../dist')));
app.get((req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')));

// Stub sign-in
app.post('/api/login', (req, res) => {
  res.json({ success: true, token: 'dummy-token' });  // Dummy response
});

// Stub sign-up
app.post('/api/signup', (req, res) => {
  try {
    console.log('Received signup request:', req.body);  // Log body to confirm
    res.json({ success: true, user: { id: 1, name: req.body.name } });
  } catch (err) {
    console.error('Signup error:', err);  // Log to terminal
    res.status(500).json({ error: 'Internal server error: ' + err.message });  // Return JSON
  }
});

app.use((err, req, res, next) => {
  console.error('Global error:', err.stack);  // Log full stack
  res.status(500).json({ error: 'Internal server error', message: err.message });
});

app.listen(port, () => console.log(`Server running on ${port}`));