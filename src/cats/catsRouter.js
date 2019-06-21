'use strict';

const express = require('express');
const catRouter = express.Router();
const bodyParser = express.json();
const STORE = require('../store');
const Queue = require('../utils/Queue');

let catsQueue = new Queue();
STORE.cats.forEach(cat => catsQueue.enqueue(cat));

catRouter
  .route('/')
  .get((req, res, next) => {
    let cats = getAllCats(catsQueue);
    res.json(cats);
  })
  .delete((req, res, next) => {
    let cat = catsQueue.dequeue();
    catsQueue.enqueue(cat);
    res.send(200);
  });

catRouter.route('/all').get((req, res, next) => {});

function getAllCats(catsList) {
  let currentNode = catsList.first;
  let catsArray = [];
  while (currentNode !== null) {
    catsArray.push(currentNode.value);
    currentNode = currentNode.next;
  }
  return catsArray;
}
module.exports = catRouter;
