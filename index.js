const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

app.use(cors({ optionsSuccessStatus: 200 }));

app.get('/api/timestamp/:date_string?', (req, res) => {
  console.log(req);
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT);
