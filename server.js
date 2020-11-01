const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const logger = require('morgan');

const router = require('./routes/api/items');

const connectDB = require('./db_config/db');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

// Connect to mongoDB
connectDB();

app.use('/api/items', router);

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server running on port ${port}`));