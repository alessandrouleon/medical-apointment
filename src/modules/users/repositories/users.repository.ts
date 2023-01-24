
import { User } from "../entities/User";

export interface IUsersRepository {
    findByUsername(username: string): Promise<User | undefined>;
    save(data: User): Promise<User>;
    findById(id: string): Promise<User | null>;
}