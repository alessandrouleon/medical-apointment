import { request, Router } from "express";
import { authenticateUserController } from "../modules/users/useCases/authenticate-user";
import { createUserController } from "../modules/users/useCases/createUseCase";

const userRouter = Router();

userRouter.post('/login', async (request, response) => {
  await authenticateUserController.handle(request, response);
});

userRouter.post('/', async (request, response) => {
  await createUserController.handle(request, response);
});

export { userRouter }
