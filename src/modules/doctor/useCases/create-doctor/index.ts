import { SpecialityPrismaRepository } from "../../../speciality/repositories/implementations/Speciality.Prisma.Repository";
import { UserPrismaRepository } from "../../../users/repositories/implementations/user.prisma.repositori";
import { DoctorPrismaRepository } from "../../repositories/implementations/doctor.prisma.repository";
import { CreateDoctorController } from "./create-doctor.controller";

const userRepository = new UserPrismaRepository();
const doctorRepository = new DoctorPrismaRepository();
const specialityRepository = new SpecialityPrismaRepository();

const createDoctorController = new CreateDoctorController(
    userRepository,
    doctorRepository,
    specialityRepository
);

export { createDoctorController }