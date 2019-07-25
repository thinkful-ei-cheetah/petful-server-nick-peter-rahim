'use strict'

const express = require('express')
const STORE = require('../utils/store')
const Queue = require('../utils/Queue')
const { seedQueue, readQueue } = require('../utils/helpers')

const dogsRouter = express.Router()

let dogsQueue = new Queue()
seedQueue(dogsQueue, STORE.dogs)

dogsRouter.route('/queue').get((req, res, next) => {
  res.json(readQueue(dogsQueue))
})

dogsRouter.route('/adopt').delete((req, res, next) => {
  const dog = dogsQueue.dequeue()
  dogsQueue.enqueue(dog)
  res.sendStatus(204)
})

module.exports = dogsRouter
