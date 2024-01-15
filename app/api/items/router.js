const express = require('express')
const route = express()
const { create, showOne, update, destroy, move } = require('./controller')
// const { valiidatiionCreate, validateGetOne, validateUpdate } = require('./validation')

route.get('/items/:id', showOne)
route.post('/items', create)
route.put('/items/:id', update)
route.delete('/items/:id', destroy)
route.put('/items/:id/move', move)

module.exports = route