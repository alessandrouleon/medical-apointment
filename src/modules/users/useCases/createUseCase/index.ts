import { PasswordBcrypt } from "../../../../infra/shared/crypton/password.bcrypt";
import { UserPrismaRepository } from "../../repositories/implementations/user.prisma.repositori";
import { CreateUserController } from "./CreateUserController";


const userPrismaRepository = new UserPrismaRepository();
const passwordCrypton = new PasswordBcrypt();
const createUserController = new CreateUserController(userPrismaRepository, passwordCrypton);

export { createUserController }