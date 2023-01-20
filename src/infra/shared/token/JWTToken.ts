import { User } from "../../../modules/users/entities/User";
import { IToken } from "./IToken";
import { sign } from 'jsonwebtoken';
import { createHmac } from 'crypto';

export class JWTToken implements IToken {

    private TOKEN_SECRET = process.env.SECRET_KEY_TOKEN || '';
    private TOKEN_SECRET_CRYPTON = createHmac('sha256', this.TOKEN_SECRET).digest('base64');

    create({ username, isAdmin, id }: User): string {
        const token = sign({
            user: {
                username,
                isAdmin,
                id
            }
        }, this.TOKEN_SECRET_CRYPTON, {
            subject: id,
            expiresIn: '1m'
        });
        return token;
    }

}