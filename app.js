const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const db = require('./database');

const indexRouter = require('./routes/index');
const wordsRouter = require('./routes/words');
const dictRouter = require('./routes/dict');

const app = express();

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/words', wordsRouter);
app.use('/dict', dictRouter);

module.exports = app;
