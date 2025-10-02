const express = require('express');
const { MongoClient } = require('mongodb');
const path = require('path');
const app = express();
const router = express.Router();
const port = 5000;

const url = 'mongodb+srv://prac5User:That1Guy@24808840.urwiwh1.mongodb.net/?retryWrites=true&w=majority&appName=24808840';
let dbPromise = null;

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

app.get('/api/users/:id', async (req, res) => {
  try {
    const user = await getUserByID(req.params.id);
    if (!user) return res.status(404).json({error: `No User with ID ${req.params.id} found`});
    res.json(user);  
  } catch (err) {
    res.status(500).json({ error: 'Something fucked up:' + err.message });
  }
})

app.get('/api/projects/:id', async (req, res) => {
  try {
    const proj = await getProjectByID(req.params.id);
    if (!proj) return res.status(404).json({error: `No Project with ID ${req.params.id} found`});
    res.json(proj);  
  } catch (err) {
    res.status(500).json({ error: 'Something fucked up:' + err.message });
  }
})

//Functions

async function connectToDatabase() {
  if (!dbPromise) {
    dbPromise = MongoClient.connect(url)
      .then(client => {
        const database = client.db('Project220');
        console.log("Connected to database");
        return database;
      })
      .catch(err => {
        console.error('DB connection failed:', err);
        throw err;
      });
  }
  return dbPromise;
}

async function getUserByID(id) {
  const db = await connectToDatabase();
  return await db.collection('Users').findOne({userID: id});
}

async function getProjectByID(id) {
  const db = await connectToDatabase();
  return await db.collection('Projects').findOne({projID: id});
}

//Final Coverage

app.use((err, req, res, next) => {
  console.error('Global error:', err.stack);
  res.status(500).json({ error: 'Internal server error', message: err.message });
});

app.listen(port, () => console.log(`Server running on ${port}`));