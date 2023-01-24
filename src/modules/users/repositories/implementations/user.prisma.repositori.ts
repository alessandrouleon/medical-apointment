import { User } from "../../entities/User";
import { IUsersRepository } from "../users.repository";
import { prismaClient } from "../../../../infra/database/prisma.config";

export class UserPrismaRepository implements IUsersRepository {

    public async findByUsername(username: string): Promise<User | undefined> {
        const user = await prismaClient.user.findUnique({
            where: { username }
        });
        return user || undefined;
    }

    public async save(data: User): Promise<User> {

        const user = await prismaClient.user.create({
            data: {
                name: data.name,
                username: data.username,
                password: data.password,
            },
        })
        return user
    }

    public async findById(id: string): Promise<User | null> {
        return await prismaClient.user.findUnique({
            where: { id }
        });
    }

}