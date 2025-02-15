import Joi from "joi";

export const userSchema = Joi.object({
  username: Joi.string().min(2).max(255).required(),
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,15}$")).optional(),
});

export const updateUserSchema = Joi.object({
  username: Joi.string().min(2).max(255).optional(),
  email: Joi.string().email({ minDomainSegments: 2 }).optional(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,15}$")).optional(),
});
