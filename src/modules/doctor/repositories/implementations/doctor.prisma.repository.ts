import { prismaClient } from "../../../../infra/database/prisma.config";
import { Doctor } from "../../entities/doctor.entities";
import { DoctorMapper } from "../../mapper/doctor.mapper";
import { IDoctorRepository } from "../doctor.repository";

export class DoctorPrismaRepository implements IDoctorRepository {

    public async save(data: Doctor): Promise<Doctor> {
        const doctor = await prismaClient.doctor.create({
            data: {
                crm: data.crm,
                email: data.email,
                speciality_id: data.specialityId,
                user_id: data.userId
            }
        });
        return DoctorMapper.prismaToEntityDoctor(doctor);
    }

    public async findByCRM(crm: string): Promise<Doctor | null> {
        const doctor = await prismaClient.doctor.findUnique({
            where: { crm }
        });

        if (doctor) return DoctorMapper.prismaToEntityDoctor(doctor);
        return null;
    }

}