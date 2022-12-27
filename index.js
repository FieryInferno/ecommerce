const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions = {origin: '*'};

app.use(cors(corsOptions));

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

require('dotenv').config();

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
app.get('/', (req, res) => res.json({
  message: 'Welcome to E-Commerce API',
}));

require('./routes/index')(app);
