const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend/public')));

app.get('/api', (rep, res) => {
    res.json({ message: "Hello World"})
});

app.get('/{=any}', (req, res) => res.sendFile(path.join(__dirname, '../frontend/public/index.html')));

app.listen(port, () => {
console.log("Listening on http://localhost:3000");
});