/**
 * Created by Adib on 14-Nov-16.
 */
'use strict';

require('dotenv').config();
const app = require('./src/server');
const port = process.env.port || 8001;

app.listen(port);
