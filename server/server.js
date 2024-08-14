const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('./config/database.js');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const expressMessages = require('express-messages');
const { body } = require('express-validator');

mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true }); 

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
  console.log('Connected successfully');
});

const app = express();

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


// Importing routers
// const pagesRouter = require('./routes/pages.js');

// Use routers as middleware
// app.use('/', pagesRouter);
// Example in Node.js/Express
app.post('/api/filter-jobs', (req, res) => {
  const { salaryRange, skills, deadline } = req.body;
  console.log(req.body);
  // Logic to filter jobs based on the received data
  // ...

  res.json(filteredJobs);
});

const port = process.env.PORT || 4000;

app.listen(port, function () {
  console.log('Server is running on port ' + port);
});