const express = require('express');
const { MongoClient } = require('mongodb');
const path = require('path');
const app = express();
const port = 3000;

const url = "mongodb+srv://ProjectAdmin:JustSome1Guy@24808840.urwiwh1.mongodb.net/?retryWrites=true&w=majority&appName=24808840";
let database;
let client;

//API

app.use(express.json());
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

//Functions

async function connectToDatabase() {
  try {
    client = new MongoClient(url);
    await client.connect();
    database = client.db("Project220");
    console.log("Connected to database");
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
}

app.use((err, req, res, next) => {
  console.error('Global error:', err.stack);
  res.status(500).json({ error: 'Internal server error', message: err.message });
});

app.listen(port, () => console.log(`Server running on ${port}`));