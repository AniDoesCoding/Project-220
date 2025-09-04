const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));

app.use(express.static(path.join(__dirname, '../dist')));
app.get((req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')));

app.post('/api/login', (req, res) => {
  res.json({ success: true, token: 'dummy-token' });
});

app.post('/api/signup', (req, res) => {
  try {
    console.log('Received signup request:', req.body);
    res.json({ success: true, user: { id: 1, name: req.body.name } });
  } catch (err) {
    console.error('Signup error:', err);  // Log to terminal
    res.status(500).json({ error: 'Internal server error: ' + err.message });
  }
});

app.use((err, req, res, next) => {
  console.error('Global error:', err.stack);
  res.status(500).json({ error: 'Internal server error', message: err.message });
});

app.listen(port, () => console.log(`Server running on ${port}`));