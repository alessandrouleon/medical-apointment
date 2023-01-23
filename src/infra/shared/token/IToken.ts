import { User } from "../../../modules/users/entities/User";

export interface IToken {
    create(user: User): string;
    validate(token: string): boolean;
}