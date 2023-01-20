import { PasswordBcrypt } from "../../../../infra/shared/crypton/password.bcrypt";
import { UserPrismaRepository } from "../../repositories/implementations/user.prisma.repositori";
import { AuthenticateUserController } from "./authenticate-user.controller";


const userPrismaRepository = new UserPrismaRepository();
const passwordCrypton = new PasswordBcrypt();

export const authenticateUserController = new AuthenticateUserController(
    userPrismaRepository,
    passwordCrypton
);

//export { authenticateUserController }