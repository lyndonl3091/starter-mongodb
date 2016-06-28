'use strict';

const PORT = process.env.PORT || 8000;

let express = require('express');
let path = require('path');
let http = require('http');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');


//// mongoose
let mongoose = require('mongoose');

let mongoUrl = process.env.MONGODB_URI || 'mongodb://localhost/testdb';

mongoose.connect(mongoUrl, err => {
  console.log(err || `Server listening on port ${PORT}`);
})

//
let app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

//ROUTERS ///
app.use('/api', require('./routes/api'));

////////

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.get('/', (req, res) => {

  res.render('index', {title: 'Superhero API'});

});


app.listen(PORT, err => {
  console.log(err || `Server listening on port ${PORT}`);

});
