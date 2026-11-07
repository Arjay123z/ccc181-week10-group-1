require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env. PORT || 3000;

app.use(cors({ origin: process.env. CLIENT_ORIGIN}));
app.use(express.json());

app.get('/api/v1/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.listen(PORT,() =>{
    console.log('API running on http://localhost:' + PORT);
});