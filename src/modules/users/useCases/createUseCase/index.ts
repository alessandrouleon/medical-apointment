import { UserPrismaRepository } from "../../repositories/implementations/user.prisma.repositori";
import { CreateUserController } from "./CreateUserController";


const userPrismaRepository = new UserPrismaRepository();
const createUserController = new CreateUserController(userPrismaRepository);

export { createUserController }