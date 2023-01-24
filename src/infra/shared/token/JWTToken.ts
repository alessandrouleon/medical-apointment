import { User } from "../../../modules/users/entities/User";
import { IToken, TokenUser } from "./IToken";
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
            expiresIn: '15m'
        });
        return token;
    }

    public validate(token: string): TokenUser | null {
        try {
            return verify(token, this.TOKEN_SECRET_CRYPTON) as TokenUser;
        } catch (err) {
            return null;
        }
    }

}