'use strict';

const express = require('express');
const dogRouter = express.Router();
const bodyParser = express.json();
const STORE = require('../store');

dogRouter
  .route('/')
  .get((req, res, next) => {
    res.json({
      id: 1,
      imageURL:
        'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
      imageDescription:
        'A smiling golden-brown golden retreiver listening to music.',
      name: 'Zeus',
      sex: 'Male',
      age: 3,
      breed: 'Golden Retriever',
      story: 'Return by previous owner'
    });
  })
  .delete((req, res, next) => {});

dogRouter
  .route('/all')
  .get((req, res, next) => {
    res.json({});
  })
  .delete((req, res, next) => {});

module.exports = dogRouter;
