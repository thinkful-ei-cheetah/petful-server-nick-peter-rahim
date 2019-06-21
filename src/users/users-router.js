const express = require('express')
const UsersService = require('./users-service')

const usersRouter = express.Router()

usersRouter
  .route('/')
  .get((req, res, next) => {
    const users = UsersService.getAllUsers()

    console.log(users)

    res.status(200).json(users)
  })

usersRouter
  .route('/:user_id')
  .get((req, res, next) => {
    const user = UsersService.getPosition()
  })

module.exports = usersRouter