const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Ajv = require("ajv")
const { data } = require('./data/dummy.post');
const { schema } = require('./schema');

const app = express();
const PORT = 4000;
const ajv = new Ajv();

app.use(cors());
app.use(bodyParser.json())
app.listen(PORT, () => console.log('Server is running'));

// Make a fake fetch call
app.get('/getReminders', (req, res) => {
  setTimeout(() => res.status(200).json(data), 1000);
  // res.status(400).json({errors: "Something went wrong"})
});

// Make a fake post call
app.post('/setReminder', (req, res) => {
  const validate = ajv.compile(schema);
  const isValid = validate(req.body);
  if (isValid) {
    data.push(req.body)
    res.status(200).send("Success")
  } else {
    res.status(400).json({ errors: validate.errors })
  }
});

// Make a fake delete call
app.delete('/reminders/:messageid', (req, res) => {
  console.log(req.params.messageid)
  const index = data.findIndex((item) => item.messageid === req.params.messageid)
  if (index !== -1) {
    data.splice(index, 1);
    res.status(200).json({ message: 'Item deleted successfully' });
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
})
