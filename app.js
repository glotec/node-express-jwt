const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');

const db = require('./config/connect');

const app = express();

//middleware
app.use(express.static('public'));
app.use(express.json())

//view engine
app.set('view engine', 'ejs');

//database connsection
// const dbURI = 'mongodb+srv://shaun:test1234@cluster0.del96.mongod.net/node-ath';
// mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
// .then((result) => app.listen(555))
// .catch((err) => console.log(err));
// mongoose.connect('mongodb://localhost:27017/authSystem',
//     { useNewUrlParser: true }, (err) =>{
//         if(!err) console.log('MongoDb Connection Succeded')
//         else console.log('Error in DB connection: ' + err)
//     });


//routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));

app.use(authRoutes);


const PORT = process.env.PORT || 5000;
 

app.listen(PORT, console.log(`Server started on port http://localhost:${ PORT}`));