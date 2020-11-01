const express = require('express');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const connectDB = require('./db_config/db');


const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// Connect to mongoDB
connectDB();

app.use('/api/items', items);

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server running on port ${port}`));