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
        next(error)
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

        await Todo.update(
            { name },
            {
                where: { id: id },
                attributes: ['id', 'name', 'createdAt', 'updatedAt']
            }
        )
 
        res.status(201).json({
            message: 'Succes',
            data: chechk
        })
    } catch (error) {
        next((error))
    }
}

const destroy = async (req, res, next) => {
    try {
        const { id } = req.params

        const chechk = await Todo.findOne({
            where: { id: id }
        })

        await Todo.destroy({
            where: { id: id }
        })

        res.status(200).json({
            message: 'Succes',
            data: chechk
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAll,
    create,
    showOne,
    update,
    destroy
}