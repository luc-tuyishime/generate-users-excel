import Joi from '@hapi/joi';
import { validateEmail } from './newUser';

export const schemaValidation = Joi.object({
    names: Joi.string()
        .min(3)
        .max(15)
        .required()
        .regex(/[$\(\)<>]/, { invert: true }),
    nid: Joi.string().length(36).required(),
    phone: Joi.string()
        .length(13)
        .pattern(/^[0-9\-\+]{9,15}$/)
        .required()
        .regex(/[$\(\)<>]/, { invert: true })
        .messages({
            'string.min': 'Should Start with + character',
            'object.regex': 'Should be Numbers',
            'string.pattern.base':
                'Must be a valid phone number Ex: (+250788888888)',
        }),
    gender: Joi.string()
        .valid('Male', 'Female')
        .regex(/[$\(\)<>]/, { invert: true }),
    email: Joi.string()
        .custom(validateEmail)
        .regex(/[$\(\)<>]/, { invert: true }),
});
