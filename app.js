const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.Promise = global.Promise;

app.use(cors());

var port = process.env.PORT||6000;

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var ver1 = require('./api/routes');

app.use('/api/ver1/', ver1.router);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + "not found"});
});

app.listen(port, () => {
    console.log("API server is startrd on port", (port));
});