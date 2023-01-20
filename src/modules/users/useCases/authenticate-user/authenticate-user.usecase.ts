import AppErros from "../../../../errors/AppError";
import CustomErro from "../../../../errors/CustomError";
import { IPasswordCrypton } from "../../../../infra/shared/crypton/password.crypton";
import { IUsersRepository } from "../../repositories/users.repository";

type AuthenticateRequest = {
    username: string;
    password: string;
}

export class AuthenticateUserUseCase {

    constructor(
        private userRepository: IUsersRepository,
        private passwordCrypton: IPasswordCrypton
    ) { }

    async execute( data: AuthenticateRequest) {
       
        if (!data.username || !data.password) {
            throw new CustomErro("Username/password iconrrect!");
        }

        const user = await this.userRepository.findByUsername(data.username);

        if (!user) {
            throw new AppErros("Username/password iconrrect!", 401);
        }

        const comparePasswordIsEquals = await this.passwordCrypton.compare(data.password, user.password);

        if (!comparePasswordIsEquals) {
            throw new AppErros("Username/password iconrrect!", 401);
        }

        return user;

    }
}