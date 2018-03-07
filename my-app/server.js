const express = require('express');
const path = require('path');
const app = express();



app.get('*.js', (req, res, next) => {
  if ('/inline' === req.url.substring(0,7)) {
    next();
  } else {
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'application/javascript');
    next();
  }
})

app.get('*.css', (req, res, next) => {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/css');
  next();
})

// Serve static files
app.use(express.static(path.join(__dirname, 'dist')));

// Return other routes to Angular index file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Set port
const port = '4200';
app.set('port', port);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})
