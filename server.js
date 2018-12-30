const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const posts=require('./routes/api/posts');
const profile=require('./routes/api/profile');
const users=require('./routes/api/users');

const app=express();

// body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// connect to mongodb
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('connection to db success'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello!'));

// Use Routes
app.use('/api/posts', posts);
app.use('/api/profile', profile);
app.use('/api/users', users);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is on port ${port}`));