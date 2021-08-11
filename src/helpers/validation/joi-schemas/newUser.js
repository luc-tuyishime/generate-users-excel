import Joi from "joi";

import * as validate from "../";

const nameValidator = (label) => (value, helpers) => {
    const checkValidName = validate.name({ name: value, required: true, label });
    return checkValidName === true ? true : helpers?.message(checkValidName);
};

const emailValidator = (value, helpers) => {
    const checkEmail = validate.email(value, true);
    return checkEmail === true ? true : helpers?.message(checkEmail);
};

export const validateEmail = (value, helpers) => {
    const checkEmail = validate.email(value, true);
    return checkEmail === true ? true : helpers?.message(checkEmail);
};

const passwordValidator = (value, helpers) => {
    const checkPassword = validate.password(value, true);
    return checkPassword === true ? true : helpers?.message(checkPassword);
};

export default Joi.object().keys({
    firstName: Joi.string()
        .min(2)
        .label('First Name')
        .required(),
    lastName: Joi.string().min(2).label('Last Name').required(),
    username: Joi.string().min(2).custom(nameValidator("username")).label("Username"),
    email: Joi.string().required().custom(emailValidator),
    phone: Joi.string().required(),
    password: Joi.string().required().custom(passwordValidator)
});
