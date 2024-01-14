const express = require('express')
const route = express()
const { getAll } = require('./controller')

route.get('/todos', getAll)

module.exports = route