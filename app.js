const express = require('express');
const mongoose = require('mongoose');

const app = express();

//middleware
app.use(express.static('public'));

//view engine
app.set('view engine', 'ejs');

//database connsection
const dbURI = 'mongodb+srv://shaun:test1234@cluster0.del96.mongod.net/node-ath';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
.then((result) => app.listen(555))
.catch((err) => console.log(err));

//routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));