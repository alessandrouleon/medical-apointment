import { PasswordBcrypt } from "../../../../infra/shared/crypton/password.bcrypt";
import { JWTToken } from "../../../../infra/shared/token/JWTToken";
import { UserPrismaRepository } from "../../repositories/implementations/user.prisma.repositori";
import { AuthenticateUserController } from "./authenticate-user.controller";


const userPrismaRepository = new UserPrismaRepository();
const passwordCrypton = new PasswordBcrypt();
const jwtToken = new JWTToken();

export const authenticateUserController = new AuthenticateUserController(
    userPrismaRepository,
    passwordCrypton,
    jwtToken
);

//export { authenticateUserController }