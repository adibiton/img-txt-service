/**
 * Created by Adib on 14-Nov-16.
 */
'use strict';

const controller = require('./controller');
const Express = require('express');
const bodyParser = require('body-parser');
const app = Express();

app.use(bodyParser.json());

app.post('/', controller.getText);

module.exports = app;
