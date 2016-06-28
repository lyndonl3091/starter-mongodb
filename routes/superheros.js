'use strict';

const express = require('express');
let Superhero = require('../models/superhero');

let router = express.Router();

// superheros.js

/// /api/superheros

router.route('/')
  .get((req, res) =>{
    Superhero.find({}, (err, superheros) =>{ //Superhero = mongoose model
      res.status(err ? 400 : 200).send(err || superheros);
    })
  })
  .post((req, res) => {

      Superhero.create(req.body, (err, savedDoc) => {
        res.status(err ? 400 : 200).send(err || superhero);
      });
      // let superhero = new Superhero(req.body);
      // superhero.save((err, savedDoc) => {
      //   res.status(err ? 400 : 200).send(err || savedDoc);
      // })
  })

  // DELETE /api/superheros/:id

  router.route('/:id')
  .get((req, res) => {
    Superhero.findById(req.params.id, (err, superhero) => {
      res.status(err ? 400 : 200).send(err || superhero);
    })
  })
    .delete((req, res) => {
      Superhero.findByIdAndRemove(req.params.id, (err) => {
        res.status(err ? 400 : 200).send(err || arg2);
      })
    })
    .put((req, res) => {
      // {new: true} sends new update
      Superhero.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, savedDoc) => {
        res.status(err ? 400 : 200).send(err || savedDoc);
      })
    })



// router.get('/', (req, res) => {
//   Superhero.find({}, (err, superheros) =>{
//     // if(err) return res.status(400).send(err);
//     // res.send(superheros);
//     res.status(err ? 400 : 200).send(err || superheros);
//   })
// })




module.exports = router;
