import { IPasswordCrypton } from "./password.crypton";
import bcrypt from 'bcrypt'


export class PasswordBcrypt implements IPasswordCrypton {

    public async hash(password: string): Promise<string> {
        return await bcrypt.hash(password, 10);
    }

   async compare(password: string, passwordHash: string): Promise<boolean> {
       return bcrypt.compare(password, passwordHash);
    }

}