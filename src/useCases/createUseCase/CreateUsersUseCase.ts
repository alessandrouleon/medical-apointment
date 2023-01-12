import { UserEntity } from "../../entities/UserEntity";
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
            throw new Error(`This username or password is required.`);
        }

        const existUser = await userRepository.findByUsername(data.username);

        if (existUser) {
            throw new Error(`This username alread exists!`);
        }

        const userCreate = await userRepository.save(user);
        return userCreate;
    }



}

export { CreateUsersUseCase }