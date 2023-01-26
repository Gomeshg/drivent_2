import joi from "joi";

const ticketSchema = joi.object({
  ticketTypeId: joi.number().integer().required(),
});

export default ticketSchema;
