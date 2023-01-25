
import { randomUUID } from 'crypto';
import AppErros from '../../../errors/AppError';

type IUser = {
    name: string;
    username: string;
    password: string;
}

class User {
    name: string;
    username: string;
    password: string;
    id: string;
    isAdmin: boolean;
    created_at: Date;

    private constructor(props: IUser) {

        if (!props.username || !props.password) {
            throw new AppErros(`This username or password is required.`, 404);
        }

        this.name = props.name;
        this.username = props.username;
        this.password = props.password;
        this.id = randomUUID();
        this.isAdmin = false;
        this.created_at = new Date;
    }

    static create(props: IUser) {
        const user = new User(props);
        return user;
    }
}


export { User }