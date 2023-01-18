import { Speciality } from "../../entities/Speciality";
import { ISpecialityRepository } from "../../repositories/ISpecialityRepositories";

type ISpeciality = {
    name: string;
    description: string;
}

export class CreateSpecialityUseCase {

    constructor(private specialityRepository: ISpecialityRepository) { }

    async execute(data: ISpeciality) {
        const speciality = new Speciality(data);

        const creatSpeciality = await this.specialityRepository.save(speciality);

        return creatSpeciality;
    }
}