import { Router } from "express";

// import { createUserSchema } from "@/schemas";
// import { validateBody } from "@/middlewares";
// import { usersPost } from "@/controllers";

const ticketRouter = Router();

// ticketRouter.post("/", validateBody(createUserSchema), usersPost);
ticketRouter.post("/", (req, res) => {
  return;
});
export { ticketRouter };
