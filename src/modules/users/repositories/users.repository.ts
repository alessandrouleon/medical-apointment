
import { User } from "../entities/User";

export interface IUsersRepository {
 findByUsername(username: string): Promise<User | undefined>;
 save(data: User): Promise<User>;
}