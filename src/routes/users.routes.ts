import { Router } from "express";
import { CreateUserController } from "../useCases/createUseCase/CreateUserController";

const userRouter = Router();

const createUserController = new CreateUserController();

userRouter.post('/', createUserController.handle);

export { userRouter }