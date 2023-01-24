import CustomErro from "../../../../errors/CustomError";
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

        const specialityExists = await this.specialityRepository.findByName(data.name);

        if(specialityExists){
          throw new CustomErro("THis Speciality already exists!");
        }

        const creatSpeciality = await this.specialityRepository.save(speciality);

        return creatSpeciality;
    }
}