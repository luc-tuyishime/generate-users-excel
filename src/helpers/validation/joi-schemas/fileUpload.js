import Joi from "joi";

export default Joi.object().keys({
    file: Joi.string().required()
});