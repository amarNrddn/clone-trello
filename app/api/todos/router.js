const express = require('express')
const route = express()
const { getAll, create, showOne, update } = require('./controller')

route.get('/todos', getAll)
route.get('/todos/:id', showOne)
route.post('/todos', create)
route.put('/todos/:id', update)

module.exports = route