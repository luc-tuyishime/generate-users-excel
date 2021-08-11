import db from '../database/models';
import * as status from '../constants/httpStatusCodes';
import * as tokens from '../utils/tokens';
import * as successMessages from '../constants/successMessages';
import * as errorMessages from '../constants/errorMessages';

const { Auth } = db;

/**
 * a class to handle user authentication
 */
export default class AuthController {
    /**
     * @description User signup function
     * @param {object} req
     * @param {object} res
     * @return {Promise} response object
     */
    static async create(req, res) {
        const newUser = await Auth.create(req.body);

        return res.status(status.HTTP_CREATED).json({
            status: status.HTTP_CREATED,
            message: successMessages.SIGN_UP_CREATED,
            user: { ...newUser.get(), password: undefined },
        });
    }

    /**
     * @description - login user function
     * @param {object} req
     * @param {object} res
     * @return {Promise} response object
     */
    static async login(req, res) {
        const { email, password } = req.body;
        const auth = await Auth.findOne({ where: { email } });

        if (!auth?.get()?.email) {
            return res.status(status.HTTP_NOT_FOUND).json({
                status: status.HTTP_NOT_FOUND,
                message: errorMessages.EMAIL_NOT_FOUND,
            });
        }

        if (!(await auth.comparePassword(password))) {
            return res.status(status.HTTP_UNAUTHORIZED).json({
                status: status.HTTP_UNAUTHORIZED,
                message: errorMessages.BAD_CREDENTIALS,
            });
        }

        const payload = {
            id: auth.get().id,
            role: auth.get().role,
            username: auth.get().username,
        };

        const token = tokens.generate(payload);

        return res.status(status.HTTP_OK).json({
            status: status.HTTP_OK,
            message: successMessages.SIGNED_IN,
            user: { ...auth.get(), password: undefined },
            token,
        });
    }
}
