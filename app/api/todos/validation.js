const { body, param , validationResult } = require('express-validator');
const {Todo} = require('../../db/models')

module.exports = {
    valiidatiionCreate: [
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

    validateGetOne: [
        param('id')
            .notEmpty()
            .withMessage('params id is required')
            .bail()
            .isNumeric()
            .withMessage('id must be an integer')
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
                const cheking = await Todo.findOne({ where: { id: value } })
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
    ]
}