import { Speciality } from "../../entities/Speciality";
import { ISpecialityRepository } from "../ISpecialityRepositories";


export class SpecialityMemoryRepository implements ISpecialityRepository {

    private items: Speciality[] = [];

    public async save(data: Speciality): Promise<Speciality> {
        this.items.push(data);
        return data;
    }

    public async findByName(name: string): Promise<Speciality | null> {
        return this.items.find((speciality) => speciality.name === name) || null;
    }

    public async findById(id: string): Promise<Speciality | null> {
        return this.items.find((speciality) => speciality.id === id) || null;
    }

}