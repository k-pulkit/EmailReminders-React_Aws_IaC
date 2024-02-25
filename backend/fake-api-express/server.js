const express = require('express');
const cors = require('cors');
const { data, addDummyRecord } = require('./data/dummy.post');

const app = express();
const PORT = 4000;

app.use(cors());

app.listen(PORT, () => console.log('Server is running'));

// Make a fake fetch call
app.get('/getReminders', (req, res) => {
  setTimeout(() => res.send(data), 2200);
});

// Make a fake fetch call
app.get('/setReminder', (req, res) => {
  addDummyRecord();
  setTimeout(() => res.send(data), 2200);
});
