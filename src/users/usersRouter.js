'use strict'

const express = require('express')
const STORE = require('../utils/store')
const Queue = require('../utils/Queue')
const { seedQueue, readQueue } = require('../utils/helpers')

const usersRouter = express.Router()

let usersQueue = new Queue()
seedQueue(usersQueue, STORE.users)

usersRouter.route('/queue').get((req, res, next) => {
  res.json(readQueue(usersQueue))
})

usersRouter.route('/adopt').delete((req, res, next) => {
  const user = usersQueue.dequeue()
  usersQueue.enqueue(user)
  res.sendStatus(204)
})

module.exports = usersRouter
