const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('./config/database.js');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const expressMessages = require('express-messages');
const cors = require('cors'); // Import cors

mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
  console.log('Connected successfully');
});

const app = express();

// Use CORS middleware
app.use(cors()); // Enable CORS for all routes

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Express session middleware
app.use(
  session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
  })
);

// Connect flash middleware
app.use(flash());

// Express Messages middleware
app.use((req, res, next) => {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

// API Route
app.post('/api/filter-jobs', (req, res) => {
  const { salaryRange, skills, deadline } = req.body;
  console.log(req.body);
  // Here you would filter jobs based on the data and return the results
  res.json({ message: 'Filtered jobs would be returned here.' });
});

const port = process.env.PORT || 4000;

app.listen(port, function () {
  console.log('Server is running on port ' + port);
});
