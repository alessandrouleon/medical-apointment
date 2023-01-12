import { UserEntity } from "../entities/UserEntity";

class UsersRepository {
    users: UserEntity[] = [];
   
    
    private static instance: UsersRepository;
    constructor(){
      this.users = []
    }

    static getInstance(){
      if(!UsersRepository.instance){
        UsersRepository.instance = new UsersRepository();
      }
      return UsersRepository.instance;
    }

    public async findByUsername(username: string) {
        return this.users.find((user) => user.username === username);
    }

    public async save(data: UserEntity){
     this.users.push(data);
      return data;
    }
}

export { UsersRepository }