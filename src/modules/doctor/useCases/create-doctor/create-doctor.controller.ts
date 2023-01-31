import { Request, Response } from "express";
import { ISpecialityRepository } from "../../../speciality/repositories/ISpecialityRepositories";
import { IUsersRepository } from "../../../users/repositories/users.repository";
import { IDoctorRepository } from "../../repositories/doctor.repository";
import { CreateDoctorUseCase } from "./create-doctor.usecase";


export class CreateDoctorController {

    constructor(
        private userRepository: IUsersRepository,
        private doctorrepository: IDoctorRepository,
        private specialityRepository: ISpecialityRepository
    ) { }

    public async handle(request: Request, response: Response) {
        const { body } = request;

        const createDoctorUseCase = new CreateDoctorUseCase(
            this.userRepository,
            this.doctorrepository,
            this.specialityRepository
        );

        const doctorCreated = await createDoctorUseCase.execute(body);
        return response.json(doctorCreated);
    }

}