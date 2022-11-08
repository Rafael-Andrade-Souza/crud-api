const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
require('dotenv/config');

//middleware 

app.use(bodyParser.json());


// Routes Import
const importRoute = require('./routes/posts');

app.use('/posts', importRoute);

// Routes

app.get('/', (req,res) => {
    res.send('Homepage');
});

app.get('/admin', (req,res) => {
    res.send('admin');
});

//Database Connection
mongoose.connect(process.env.database_connect, () => 
    console.log('Database Connected')
);


app.listen(3000);