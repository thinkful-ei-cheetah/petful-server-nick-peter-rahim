'use strict';

const express = require('express');
const userRouter = express.Router();
const bodyParser = express.json();
const STORE = require('../store');
const Queue = require('../utils/Queue');

let usersQueue = new Queue();

STORE.users.forEach(user => usersQueue.enqueue(user));

userRouter.route('/').get((req, res, next) => {
  let users = getAllUsers(usersQueue);
  res.json(users);
});

function getAllUsers(usersList) {
  let currentNode = usersList.first;
  let usersArray = [];
  while (currentNode !== null) {
    usersArray.push(currentNode.value);
    currentNode = currentNode.next;
  }
  return usersArray;
}

module.exports = userRouter;
