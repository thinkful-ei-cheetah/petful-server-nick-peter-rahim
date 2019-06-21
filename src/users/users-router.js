const express = require('express')
const UsersService = require('./users-service')

const usersRouter = express.Router()

usersRouter
  .route('/')
  .get((req, res, next) => {
    let users = UsersService.getAllUsers()

    console.log(users)

    res.status(200).json(users)
  })

module.exports = usersRouter