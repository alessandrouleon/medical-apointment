import { Request, Response } from "express";
import { CreateUsersUseCase } from "./CreateUsersUseCase";

class CreateUserController {
    async handle(request: Request, response: Response) {
       try {
        const data = request.body;
        const userUseCase = new CreateUsersUseCase();
        const result = await userUseCase.execute(data);
       
        return response.json(result);

       }catch (err: any) {
          return response.json(err.message);
       }
    }
}

export { CreateUserController }