const { Todo, Item } = require('../../db/models')

const getAll = async (req, res, next) => {
    try {
        const result = await Todo.findAll({
            attributes: ['id', 'name'],
            include: {
                model: Item,
                attributes: ['id', 'name', 'TodoId'],
            }

        })
        res.status(200).json({
            message: 'Succes',
            data: result
        })
    } catch (error) {
        error
    }
}

module.exports = {
    getAll
}