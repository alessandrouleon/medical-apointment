import { request, Router } from "express";
import { createUserController } from "../modules/users/useCases/createUseCase";

const userRouter = Router();

userRouter.post('/user', async (request, response) => {
  await  createUserController.handle(request, response)
});

export { userRouter }
