'use strict';

const mongoose = require('mongoose');

let superheroSchema =  {
  name: String,
  power: [String],
  nemesis: String
};

let Superhero = mongoose.model('Superhero', superheroSchema);

module.exports = Superhero;
