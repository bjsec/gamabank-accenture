const dotenv = require('dotenv');
require('../configs/env');

const app = require('./app.js');

const port = process.env.PORT || '3000';
app.listen(port);

console.log(`Listening on port ${port}`);
