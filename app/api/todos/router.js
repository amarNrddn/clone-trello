const express = require('express')
const route = express()

route.get('/todos', (req, res) => {
    res.json({ message: 'heello toodos'});
})

module.exports = route