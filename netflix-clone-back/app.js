const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const authRoute = require('./routes/auth-route');
const userRoute = require('./routes/user-route');
const listRoute = require('./routes/list-route');
const movieRoute = require('./routes/movie-route');
const keys = require('./private/keys');

const mongoUrl = `mongodb+srv://pius_gori:${keys.mongoPassword}@piuscluster.wvoqx.mongodb.net/netflix?retryWrites=true&w=majority`;

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    next();
});

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/list', listRoute);
app.use('/api/movies', movieRoute);

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