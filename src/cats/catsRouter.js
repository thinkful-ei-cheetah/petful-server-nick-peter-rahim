'use strict';

const express = require('express');
const catRouter = express.Router();
const bodyParser = express.json();
const STORE = require('../store');

catRouter
  .route('/')
  .get((req, res, next) => {
    res.json({
      id: 1,
      imageURL:
        'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
      imageDescription:
        'Orange bengal cat with black stripes lounging on concrete.',
      name: 'Stripe',
      sex: 'Female',
      age: 2,
      breed: 'Tabby',
      story: 'Thrown on the street'
    });
  })
  .delete((req, res, next) => {});

catRouter.route('/all').get((req, res, next) => {
  res.json({});
});
module.exports = catRouter;
