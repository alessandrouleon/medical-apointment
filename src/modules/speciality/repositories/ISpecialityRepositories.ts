import { Speciality } from "../entities/Speciality";

export interface ISpecialityRepository {
    save(data: Speciality): Promise<Speciality>;
}