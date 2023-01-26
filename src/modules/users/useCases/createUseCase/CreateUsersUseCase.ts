import { User } from "../../entities/User";
import AppError from "../../../../errors/AppError";
import { IUsersRepository } from "../../repositories/users.repository";
import CustomErro from "../../../../errors/CustomError";

type UserRequest = {
    name: string;
    username: string;
    password: string;
}

class CreateUsersUseCase {

    constructor(
        private userRepository: IUsersRepository,

    ) { }

    public async execute(data: UserRequest) {

        const user = await User.create(data);

        if (!data.username || !data.password) {
            throw new AppError(`This username or password is required.`, 404);
        }

        const existUser = await this.userRepository.findByUsername(data.username);

        if (existUser) {
            throw new CustomErro(`This username alread exists!`, 400);
        }

        const userCreate = await this.userRepository.save(user);
        return userCreate;
    }


}

export { CreateUsersUseCase }