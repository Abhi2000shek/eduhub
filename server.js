const express = require('express');
const path = require('path');
const http = require('http');
const mongoose = require('mongoose');//ORM (Object Relation Mapping)
const cors = require('cors');//cors (Cross Origin Resource Sharing)
const bodyParser = require('body-parser');
const app = express();
mongoose.connect('mongodb+srv://abhi2097:Abh!shek1@cluster0-nbqjz.mongodb.net/test?retryWrites=true', { useNewUrlParser: true });
app.use(cors());
const courseapi = require('./Rest/courseapi');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', courseapi);
http.createServer(app).listen(process.env.PORT || 3000);
console.log("BackEnd Server Is On ", process.env.PORT || 3000);
