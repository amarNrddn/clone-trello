const express = require('express')
const route = express()
const { getAll, create, showOne, update, destroy } = require('./controller')
const { valiidatiionCreate, validateGetOne, validateUpdate } = require('./validation')

route.get('/todos', getAll)
route.get('/todos/:id', validateGetOne, showOne)
route.post('/todos', valiidatiionCreate, create)
route.put('/todos/:id', validateUpdate, update)
route.delete('/todos/:id', validateGetOne, destroy)

module.exports = route