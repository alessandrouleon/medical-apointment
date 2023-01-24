import { prismaClient } from "../../../../infra/database/prisma.config";
import { Speciality } from "../../entities/Speciality";
import { ISpecialityRepository } from "../ISpecialityRepositories";


export class SpecialityPrismaRepository implements ISpecialityRepository {

    public async save(data: Speciality): Promise<Speciality> {
        const speciality = await prismaClient.speciality.create({
            data: {
                id: data.id,
                name: data.name,
                description: data.description
            } as any
        });
        return speciality;
    }

    public async findByName(name: string): Promise<Speciality | null> {
        return await prismaClient.speciality.findUnique({
            where: { name }
        });
    }

}