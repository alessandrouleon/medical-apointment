import { SpecialityPrismaRepository } from "../../repositories/implementations/Speciality.Prisma.Repository";
import { CreateSpecialityController } from "./CreateSpecialityController";


const specialityPrismaRepository = new SpecialityPrismaRepository();
const createSpecialityController = new CreateSpecialityController(specialityPrismaRepository);

export { createSpecialityController }