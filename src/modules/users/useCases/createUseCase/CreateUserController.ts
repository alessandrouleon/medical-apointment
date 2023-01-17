import { Request, Response } from "express";
import { logger } from "../../../../../logger";
import { CreateUsersUseCase } from "./CreateUsersUseCase";
import { IUsersRepository } from "../../repositories/users.repository";
import { IPasswordCrypton } from "../../../../infra/shared/crypton/password.crypton";

class CreateUserController {

  constructor(
    private userRepository: IUsersRepository,
    private passwordCrypton: IPasswordCrypton
    ){}
    async handle(request: Request, response: Response) {
      logger.info("Usuario sendo criado");
       try {
        const data = request.body;
        const userUseCase = new CreateUsersUseCase(
          this.userRepository,
          this.passwordCrypton
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