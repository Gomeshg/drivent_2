import joi from "joi";

const paymentSchema = joi.object({
  ticketId: joi.number().integer().required(),
  cardData: {
    issuer: joi.string().required(),
    number: joi.number().integer().required(),
    name: joi.string().required(),
    expirationDate: joi.date(),
    cvv: joi.number().integer().required(),
  },
});

export default paymentSchema;
