import { Speciality } from "../../entities/Speciality";
import { ISpecialityRepository } from "../../repositories/ISpecialityRepositories";

type ISpecialityRequest = {
    name: string;
    description: string;
}

export class CreateSpecialityUseCase {

    constructor(private specialityRepository: ISpecialityRepository) { }

    async execute(data: ISpecialityRequest) {
        const speciality = new Speciality(data);

        const creatSpeciality = await this.specialityRepository.save(speciality);

        return creatSpeciality;
    }
}