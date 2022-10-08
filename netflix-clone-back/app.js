const express = require('express');
const mongoose = require('mongoose');

const authRoute = require('./routes/auth-route');
const keys = require('./private/keys');

const mongoUrl = `mongodb+srv://pius_gori:${keys.mongoPassword}@piuscluster.wvoqx.mongodb.net/netflix?retryWrites=true&w=majority`;

const app = express();

app.use(express.json());

app.use('/api/auth', authRoute);


mongoose.connect(mongoUrl).then(() => {
    app.listen(8000);
})