import { Request, Response } from "express";
import { logger } from "../../../logger";
import { CreateUsersUseCase } from "./CreateUsersUseCase";
import AppError from "../../errors/AppError";

class CreateUserController {
    async handle(request: Request, response: Response) {
      logger.info("Usuario sendo criado");
       try {
        const data = request.body;
        const userUseCase = new CreateUsersUseCase();
        const result = await userUseCase.execute(data);
       
        return response.json(result);

       }catch (err: any) {
         logger.error(err.stack);
          return response.status(err.statusCode).json(err.message);
       }
    }
}

export { CreateUserController }