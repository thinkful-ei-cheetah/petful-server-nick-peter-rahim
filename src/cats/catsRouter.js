'use strict'

const express = require('express')
const STORE = require('../utils/store')
const Queue = require('../utils/Queue')
const { seedQueue, readQueue } = require('../utils/helpers')

const catsRouter = express.Router()

const catsQueue = new Queue()
seedQueue(catsQueue, STORE.cats)

catsRouter.route('/queue').get((req, res, next) => {
  res.json(readQueue(catsQueue))
})

catsRouter.route('/adopt').delete((req, res, next) => {
  const cat = catsQueue.dequeue()
  catsQueue.enqueue(cat)
  res.sendStatus(204)
})

module.exports = catsRouter
