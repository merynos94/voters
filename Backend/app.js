const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const candidatesRoutes = require('./routes/candidates-routes');
const usersRoutes = require('./routes/users-routes');
const HttpError = require('./models/http-error');

const app = express();

app.use(bodyParser.json());

app.use('/api/candidates', candidatesRoutes);
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Orgin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Orgin,X-Requested-With,Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
  next();
});

app.use('/api/candidates', candidatesRoutes); 

app.use('/api/users', usersRoutes);


app.use((req, res, next) => {
  console.log("REQ: ", req);
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || 'An unknown error occurred!' });
});

const mongoUri = 'mongodb+srv://radek:radek123@cluster0-oazej.mongodb.net/candidates?retryWrites=true&w=majority';
const mm = 'mongodb://127.0.0.1:27017/?compressors=snappy&gssapiServiceName=mongodb'
mongoose
  .connect(mm)
  .then(() => {
    app.listen(5000);
  })
  .catch(err => {
    console.log(err);
  });
