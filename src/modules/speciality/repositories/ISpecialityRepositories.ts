import { Speciality } from "../entities/Speciality";

export interface ISpecialityRepository {
    save(data: Speciality): Promise<Speciality>;
    findByName(name: string): Promise<Speciality | null>;
}