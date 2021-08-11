import Joi from "joi";

export default Joi.object().keys({
    names: Joi.string().min(2).max().label('Names').required()
});