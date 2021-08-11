import excelToJson from 'convert-excel-to-json';
import formidable from 'formidable';
import errorHandler from '../helpers/errorHandler';
import Joi from '@hapi/joi';

import db from '../database/models';
import * as status from '../constants/httpStatusCodes';
import * as successMessages from '../constants/successMessages';
import * as errorMessages from '../constants/errorMessages';
import { validateEmail } from '../helpers/validation/joi-schemas/newUser';

const { User } = db;

const schemaValidation = Joi.object({
    names: Joi.string().max(2).required(),
    nid: Joi.string().max(3).required(),
    phone: Joi.string().min(5).max(20).required(),
    gender: Joi.string().valid('Male', 'Female'),
    email: Joi.string().required().custom(validateEmail),
});

/**
 * a class to handle Data from Excel
 */
export default class UserController {
    /**
     * @description Excel User data function
     * @param {object} req
     * @param {object} res
     * @return {Promise} response object
     */
    static async uploadFile(req, res) {
        const form = formidable({ multiples: false });

        form.parse(req, async (err, fields, files) => {
            const result = excelToJson({
                sourceFile: files.file.path,
                columnToKey: {
                    '*': '{{columnHeader}}',
                },
            });

            if (result[Object.keys(result)[0]].length === 0) {
                return res.status(status.HTTP_BAD_REQUEST).json({
                    status: status.HTTP_BAD_REQUEST,
                    message: errorMessages.EMPTY_SHEET,
                });
            }

            const users = result[Object.keys(result)[0]];

            users.shift();

            users.forEach((user) => {
                const { error } = schemaValidation.validate(user, {
                    abortEarly: false,
                });

                if (error?.details && Array.isArray(error.details)) {
                    error.details.forEach((err) => {
                        if (err?.context?.key) {
                            user.errors = {
                                ...user.errors,
                                [err.context.key]: err.message,
                            };
                        }
                    });
                }
            });

            return User.bulkCreate(users)
                .then((data) => {
                    return res.status(status.HTTP_CREATED).json({
                        status: status.HTTP_CREATED,
                        filename: req?.file?.originalname,
                        message: successMessages.UPLOAD_SUCCESS,
                        users: data,
                    });
                })
                .catch((err) => {
                    const error = errorHandler(err);
                    return res.status(error.code).json({
                        status: error.code,
                        message: error.message,
                        errors: error.errors,
                    });
                });
        });
    }

    /**
     * @description method to find one user from Excel file
     * @param {object} req user request object
     * @param {object} res response object from server
     * @returns {object} return a user
     */
    static async getOne(req, res) {
        const id = Number.parseInt(req.params.id, 10);

        const fetchUser = await User.findOne({ where: { id } });

        return fetchUser
            ? res.status(status.HTTP_OK).json({
                  status: status.HTTP_OK,
                  user: fetchUser,
              })
            : res.status(status.HTTP_NOT_FOUND).json({
                  errors: { user: errorMessages.USER_NOT_FOUND },
              });
    }

    /**
     * @description method to find all user from Excel file
     * @param {object} req user request object
     * @param {object} res response object from server
     * @returns {object} return a user
     */
    static async getAll(req, res) {
        const fetchAllUsers = await User.findAll();

        console.log(`fetchAllUsers`, fetchAllUsers);

        return fetchAllUsers
            ? res.status(status.HTTP_OK).json({
                  status: status.HTTP_OK,
                  users: fetchAllUsers,
              })
            : res.status(status.HTTP_NOT_FOUND).json({
                  errors: { user: errorMessages.USERS_NOT_FOUND },
              });
    }
}
