import { Request, Response } from "express";
import { logger } from "../../../../../logger";
import { CreateUsersUseCase } from "./CreateUsersUseCase";
import { IUsersRepository } from "../../repositories/users.repository";

class CreateUserController {

  constructor(
    private userRepository: IUsersRepository
    ){}
    async handle(request: Request, response: Response) {
      logger.info("Usuario sendo criado");
       try {
        const data = request.body;
        const userUseCase = new CreateUsersUseCase(
          this.userRepository
          );
        const result = await userUseCase.execute(data);
       
        return response.json(result);

       }catch (err: any) {
         logger.error(err.stack);
          return response.status(err.statusCode).json({
            error: err.message
          });
       }
    }
}

export { CreateUserController }