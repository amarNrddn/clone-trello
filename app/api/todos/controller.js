const { Todo, Item } = require('../../db/models')
const { response } = require('./router')

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

const showOne = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await Todo.findOne({
            where: { id: id }
        })

        res.status(200).json({
            message: 'Succes',
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const create = async (req, res, next) => {
    try {
        const { name } = req.body
        const result = await Todo.create({ name })

        res.status(201).json({
            message: 'Succes',
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const update = async (req, res, next) => {
    try {
        const { id } = req.params
        const { name } = req.body

        const chechk = await Todo.findOne({
            where: { id: id }
        })

        if (!chechk) {
            res.status(400).json({
                message: `Tidak ada id ${id}`
            })
        }

        const result = await Todo.update(
            { name },
            { where: { id: id } }
        )

        res.status(201).json({
            message: 'Succes',
            data: result
        })
    } catch (error) {
        next((error))
    }
}

module.exports = {
    getAll,
    create,
    showOne,
    update
}