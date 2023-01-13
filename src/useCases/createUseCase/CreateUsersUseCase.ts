import { UserEntity } from "../../entities/UserEntity";
import AppError from "../../errors/AppError";
import { UsersRepository } from "../../repositories/UsersRepository";

type UserRequest = {
    name: string;
    username: string;
    password: string;
}

class CreateUsersUseCase {

    public async execute(data: UserRequest) {
        const userRepository = UsersRepository.getInstance();
        const user = UserEntity.create(data);

        if (!data.username || !data.password) {
            throw new AppError(`This username or password is required.`, 404);
        }

        const existUser = await userRepository.findByUsername(data.username);

        if (existUser) {
            throw new AppError(`This username alread exists!`, 422);
        }

        const userCreate = await userRepository.save(user);
        return userCreate;
    }


}

export { CreateUsersUseCase }