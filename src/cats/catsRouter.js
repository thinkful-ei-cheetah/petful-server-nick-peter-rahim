'use strict';

const express = require('express');
const catRouter = express.Router();
const bodyParser = express.json();

catRouter
  .route('/')
  .get((req, res, next) => {
    res.json({
      imageURL:
        'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
      imageDescription:
        'Orange bengal cat with black stripes lounging on concrete.',
      name: 'Fluffy',
      sex: 'Female',
      age: 2,
      breed: 'Bengal',
      story: 'Thrown on the street'
    });
  })
  .post((req, res, next) => {});

module.exports = catRouter;
