import { User } from "../../../modules/users/entities/User";
import { IToken } from "./IToken";
import { sign, verify } from 'jsonwebtoken';
import { createHmac } from 'crypto';

export class JWTToken implements IToken {

    private TOKEN_SECRET = process.env.SECRET_KEY_TOKEN || '';
    private TOKEN_SECRET_CRYPTON = createHmac('sha256', this.TOKEN_SECRET).digest('base64');

    public create({ username, isAdmin, id }: User): string {
        const token = sign({
            user: {
                username,
                isAdmin,
                id
            }
        }, this.TOKEN_SECRET_CRYPTON, {
            subject: id,
            expiresIn: '20s'
        });
        return token;
    }

    public validate(token: string): boolean {
        try {
            verify(token, this.TOKEN_SECRET_CRYPTON);
            return true;
        } catch (err) {
            return false;
        }
    }

}