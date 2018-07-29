const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
// Creating app and adding middleware
const app = express();
app.use(cors({ optionsSuccessStatus: 200 }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serving static assets
app.use(express.static('build'));

/* GET ROUTES */

/* Returned JSON is UNIX time and UTC time */

// returning current time - timestamp
app.get('/api/timestamp/', (req, res) => {
  res.send({ unix: new Date().getTime(), utc: new Date().toUTCString() });
});

// returning time based on date string in query string
app.get('/api/timestamp/:date_string?', (req, res) => {
  let date = req.params.date_string;
  // if date_string is a timestamp rather than specified ISO - YYYY-MM-DD
  if (!date.match(/\d{4}-\d\d-\d\d/)) {
    // convert to int
    date = parseInt(date, 10);
  }
  // Using native Date constructor to create a Date instance
  const now = new Date(date);
  // If not valid date - return invalid JSON response
  if (now === 'Invalid Date') {
    res.send({ unix: 'null', utc: 'Invalid Date' });
  } else {
    // If valid date - return UNIX and UTC time
    res.send({ unix: now.getTime(), utc: now.toUTCString() });
  }
});

// All other GET requests - serve static assets
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

// Production port or localhost port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);

module.exports = app;
