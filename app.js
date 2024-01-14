const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const todosRaouter = require('./app/api/todos/router')

const v1 = '/api/v1'

app.get('/', (req, res) => {
    res.json({
        message: 'welcome',
        version: 1.0
    })
})
app.use(`${v1}/cms`, todosRaouter)



module.exports = app;
