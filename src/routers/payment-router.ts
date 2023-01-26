import { Router } from "express";

// import { createUserSchema } from "@/schemas";
// import { validateBody } from "@/middlewares";
// import { usersPost } from "@/controllers";

const paymentRouter = Router();

// paymentRouter.post("/", validateBody(createUserSchema), usersPost);
paymentRouter.post("/", (req, res) => {
  return;
});

export { paymentRouter };
