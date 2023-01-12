
import { randomUUID } from 'crypto';

type IUser = {
    name: string;
    username: string;
    password: string;
}

class UserEntity {
    name: string;
    username: string;
    password: string;
    id: string;
    isAdmin: boolean;
    created_at: Date;

   private constructor(props: IUser) {
        this.name = props.name;
        this.username = props.username;
        this.password = props.password;
        this.id = randomUUID();
        this.isAdmin = false;
        this.created_at = new Date;
    }

    static create(props: IUser){
      const user = new UserEntity(props);
      return user;
    }
}


export { UserEntity }