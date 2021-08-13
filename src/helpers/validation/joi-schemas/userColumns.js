import Joi from '@hapi/joi';
import { validateEmail } from './newUser';

export const schemaValidation = Joi.object({
    names: Joi.string()
        .min(3)
        .max(15)
        .required()
        .regex(/[$\(\)<>]/, { invert: true }),
    nid: Joi.string()
        .length(36)
        .required()
        .regex(/[$\(\)<>]/, { invert: true }),
    phone: Joi.string()
        .length(13)
        .pattern(/^[0-9\-\+]{9,15}$/)
        .required()
        .messages({
            'string.min': 'Should Start with + character',
            'object.regex': 'Should be Numbers',
            'string.pattern.base':
                'Must be a valid phone number Ex: (+250788888888)',
        })
        .required()
        .regex(/[$\(\)<>]/, { invert: true }),
    gender: Joi.string()
        .valid('Male', 'Female')
        .required()
        .regex(/[$\(\)<>]/, { invert: true }),
    email: Joi.string()
        .custom(validateEmail)
        .required()
        .regex(/[$\(\)<>]/, { invert: true }),
});
