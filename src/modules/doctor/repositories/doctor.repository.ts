import { Doctor } from "../entities/doctor.entities";

export interface IDoctorRepository {
    save(data: Doctor): Promise<Doctor>;
    findByCRM(crm: string): Promise<Doctor | null>;
}