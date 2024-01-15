const { Todo, Item } = require('../../db/models')

const showOne = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await Item.findOne({
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
        const { name, TodoId } = req.body
        const result = await Item.create({ name, TodoId })

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

        const chechk = await Item.findOne({
            where: { id: id }
        })

        if (!chechk) {
            res.status(400).json({
                message: `Tidak ada id ${id}`
            })
        }

        await Item.update(
            { name },
            {
                where: { id: id },
                attributes: ['id', 'name', 'createdAt', 'updatedAt']
            }
        )

        const result = await Item.findOne({ where: { id: id } })

        res.status(201).json({
            message: 'Succes',
            data: result
        })
    } catch (error) {
        next((error))
    }
}

const destroy = async (req, res, next) => {
    try {
        const { id } = req.params

        const chechk = await Item.findOne({
            where: { id: id }
        })

        if (!chechk) {
            res.status(400).json({
                message: `Tidak ada id ${id}`
            })
        }


        res.status(200).json({
            message: 'Succes',
            data: chechk
        })
    } catch (error) {
        next(error)
    }
}

const move = async (req, res, next) => {
    try {
        const { id } = req.params
        const { targetTodoId } = req.body

        const result = await Item.findOne({ where: { id: id } })

        result.TodoId = targetTodoId

        await result.save()

        res.status(200).json({
            message: 'Succes',
            data: result
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    create,
    showOne,
    update,
    destroy,
    move
}