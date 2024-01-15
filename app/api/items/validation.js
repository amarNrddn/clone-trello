const { body, param, validationResult } = require('express-validator');
const { Item, Todo } = require('../../db/models')

module.exports = {
    valiidatiionCreate: [
        body('name').notEmpty().withMessage('name is not requered'),
        body('TodoId')
            .notEmpty()
            .withMessage('TodoId is required')
            .bail()
            .isNumeric()
            .withMessage('TodoId must be an integer')
            .bail()
            .custom(async (value, { req }) => {
                const cheking = await Todo.findOne({ where: { id: value } })
                if (cheking === null) {
                    return Promise.reject()
                }
            })
            .withMessage('TodoId is not found'),
        (req, res, next) => {
            const error = validationResult(req)
            if (!error.isEmpty()) {
                return res.status(422).json({
                    message: 'error',
                    error: error.array()
                })
            }

            next()
        }
    ],

    validateGetOne: [
        param('id')
            .notEmpty()
            .withMessage('params id is required')
            .bail()
            .isNumeric()
            .withMessage('id must be an integer')
            .bail()
            .custom(async (value, { req }) => {
                const cheking = await Item.findOne({ where: { id: value } })
                if (cheking === null) {
                    return Promise.reject()
                }
            })
            .withMessage('paramas is not found'),
        (req, res, next) => {
            const error = validationResult(req)
            if (!error.isEmpty()) {
                return res.status(422).json({
                    message: 'error',
                    error: error.array()
                })
            }

            next()
        }
    ],

    validateUpdate: [
        param('id')
            .notEmpty()
            .withMessage('params id is required')
            .bail()
            .isNumeric()
            .withMessage('id must be an integer')
            .bail()
            .custom(async (value, { req }) => {
                const cheking = await Item.findOne({ where: { id: value } })
                if (cheking === null) {
                    return Promise.reject()
                }
            })
            .withMessage('paramas is not found'),
        body('name').notEmpty().withMessage('name is not requered'),
        (req, res, next) => {
            const error = validationResult(req)
            if (!error.isEmpty()) {
                return res.status(422).json({
                    message: 'error',
                    error: error.array()
                })
            }

            next()
        }
    ],

    validateMove: [
        param('id')
            .notEmpty()
            .withMessage('params id is required')
            .bail()
            .isNumeric()
            .withMessage('id must be an integer')
            .bail()
            .custom(async (value, { req }) => {
                const cheking = await Item.findOne({ where: { id: value } })
                if (cheking === null) {
                    return Promise.reject()
                }
            })
            .withMessage('targetTodoId is not found'),
        body('targetTodoId').notEmpty().withMessage('name is not requered')
            .bail()
            .custom(async (value, { req }) => {
                const cheking = await Todo.findOne({ where: { id: value } })
                if (cheking === null) {
                    return Promise.reject()
                }
            })
            .withMessage('paramas is not found'),
        (req, res, next) => {
            const error = validationResult(req)
            if (!error.isEmpty()) {
                return res.status(422).json({
                    message: 'error',
                    error: error.array()
                })
            }

            next()
        }
    ]
}