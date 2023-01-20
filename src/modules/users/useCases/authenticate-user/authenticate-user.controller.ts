import { Request, Response } from "express";
import { IPasswordCrypton } from "../../../../infra/shared/crypton/password.crypton";
import { IUsersRepository } from "../../repositories/users.repository";
import { AuthenticateUserUseCase } from "./authenticate-user.usecase";


export class AuthenticateUserController {
   public constructor(
        private userRepository: IUsersRepository,
        private passwordCrypton: IPasswordCrypton
    ){}

   public async handle(request: Request, response: Response){
      try {
        const data = request.body;
        const authenticateUserUseCase = new AuthenticateUserUseCase(
            this.userRepository,
            this.passwordCrypton
        );
        const result = await authenticateUserUseCase.execute(data);
        return response.json(result);
      }
      catch(err: any) {
        return response.status(err.statusCode).json({
            error: err.message
        });
      }

    }
}