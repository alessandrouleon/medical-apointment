import { Doctor } from "../../entities/doctor.entities";
import { IDoctorRepository } from "../doctor.repository";


export class DoctorMemoryRepository implements IDoctorRepository {
    
    protected items: Doctor[] = [];

    async save(data: Doctor): Promise<Doctor> {
        this.items.push(data);
        return data;
    }

   async findByCRM(crm: string): Promise<Doctor | null> {
        return this.items.find((doctor) => doctor.crm === crm) || null;
    }

}