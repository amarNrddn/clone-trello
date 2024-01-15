const express = require('express')
const route = express()
const { create, showOne, update, destroy, move } = require('./controller')
const { valiidatiionCreate, validateGetOne, validateUpdate, validateMove } = require('./validation')

route.get('/items/:id', validateGetOne, showOne)
route.post('/items', valiidatiionCreate, create)
route.put('/items/:id', validateUpdate, update)
route.delete('/items/:id', validateGetOne, destroy)
route.put('/items/:id/move', validateMove, move)

module.exports = route