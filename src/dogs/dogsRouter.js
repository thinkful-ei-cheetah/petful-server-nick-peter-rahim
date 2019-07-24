'use strict';

const express = require('express');
const dogRouter = express.Router();
const bodyParser = express.json();
const STORE = require('../store');
const Queue = require('../utils/Queue');

let dogsQueue = new Queue();

STORE.dogs.forEach(dog => dogsQueue.enqueue(dog));

dogRouter
  .route('/')
  .get((req, res, next) => {
    let dogs = getAllDogs(dogsQueue);
    res.json(dogs);
  })
  .delete((req, res, next) => {
    let dog = dogsQueue.dequeue();
    dogsQueue.enqueue(dog);
    res.sendStatus(200);
  });

dogRouter.route('/all').get((req, res, next) => {
  res.json({});
});

function getAllDogs(dogsList) {
  let currentNode = dogsList.first;
  let dogsArray = [];
  while (currentNode !== null) {
    dogsArray.push(currentNode.value);
    currentNode = currentNode.next;
  }
  return dogsArray;
}

module.exports = dogRouter;
