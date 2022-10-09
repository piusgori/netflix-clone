const express = require('express');
const mongoose = require('mongoose');

const authRoute = require('./routes/auth-route');
const keys = require('./private/keys');

const mongoUrl = `mongodb+srv://pius_gori:${keys.mongoPassword}@piuscluster.wvoqx.mongodb.net/netflix?retryWrites=true&w=majority`;

const app = express();

app.use(express.json());

app.use('/api/auth', authRoute);

app.use((req, res, next) => {
    throw new HttpError('The page you are looking for could not be found', null, 404);
  })
  
app.use((error, req, res, next) => {
    res.status(error.code || 500);
    res.json({ message: error.message || 'An Unknown error has occurred!', content: error.content || null })
})


mongoose.connect(mongoUrl).then(() => {
    app.listen(8000);
})