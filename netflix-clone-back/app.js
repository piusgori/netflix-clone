const express = require('express');
const mongoose = require('mongoose');

const keys = require('./private/keys');

const mongoUrl = `mongodb+srv://pius_gori:${keys.mongoPassword}@piuscluster.wvoqx.mongodb.net/netflix?retryWrites=true&w=majority`;

const app = express();


mongoose.connect(mongoUrl).then(() => {
    app.listen(8000);
})