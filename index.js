const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

app.use(cors({ optionsSuccessStatus: 200 }));
app.use(bodyParser.json());

app.get('/api/timestamp/', (req, res) => {
  res.send({ unix: new Date().getTime(), utc: new Date().toUTCString() });
});

app.get('/api/timestamp/:date_string?', (req, res) => {
  let date = req.params.date_string;
  if (!date.match(/\d{4}-\d\d-\d\d/)) {
    date = parseInt(date, 10);
  }
  const now = new Date(date);
  if (now === 'Invalid Date') {
    res.send({ unix: 'null', utc: 'Invalid Date' });
  } else {
    res.send({ unix: now.getTime(), utc: now.toUTCString() });
  }
});

app.use(express.static('build'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

module.exports = app;
