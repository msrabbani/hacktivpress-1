const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const index = require('./routes/index');
const users = require('./routes/users');
const articles = require('./routes/articles');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/hacktivpress');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!");
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', index);
app.use('/users/', users);
app.use('/articles/', articles);

app.listen(3000, () => console.log("Listening on port 3000"));
