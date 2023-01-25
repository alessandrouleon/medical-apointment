import CustomErro from "../../../../errors/CustomError";
import { User } from "../../../users/entities/User";
import { IUsersRepository } from "../../../users/repositories/users.repository";
import { Doctor } from "../../entities/doctor.entities";
import { IDoctorRepository } from "../../repositories/doctor.repository";

export type CreateDoctorRequest = {
    name: string;
    username: string;
    password: string;
    email: string;
    crm: string;
    specialityId: string;
}

export class CreateDoctorUseCase {

    public constructor(
        private userRepository: IUsersRepository,
        private doctorRepository: IDoctorRepository
    ) { }

    public async execute(data: CreateDoctorRequest) {

        const user = User.create({
            name: data.name,
            username: data.username,
            password: data.password
        });

        const existUser = await this.userRepository.findByUsername(data.username);

        if (existUser) {
            throw new CustomErro(`This username alread exists!`, 400);
        }

        const useCreated = await this.userRepository.save(user);

        const doctor = Doctor.create({
            crm: data.crm,
            email: data.email,
            specialityId: data.specialityId,
            userId: useCreated.id
        });

        const crmExists = await this.doctorRepository.findByCRM(data.crm);

        if(crmExists){
           throw new CustomErro("THis CRM exists!", 404);
        }

        const doctorCreated = await this.doctorRepository.save(doctor);

        return doctorCreated;

    }
}