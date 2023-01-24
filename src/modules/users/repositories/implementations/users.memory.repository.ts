import { User } from "../../entities/User";
import { IUsersRepository } from "../users.repository";

class UsersMemoryRepository implements IUsersRepository {
    users: User[] = [];
   
    
    private static instance: UsersMemoryRepository;
    constructor(){
      this.users = []
    }

    static getInstance(){
      if(!UsersMemoryRepository.instance){
        UsersMemoryRepository.instance = new UsersMemoryRepository();
      }
      return UsersMemoryRepository.instance;
    }

    public async findByUsername(username: string){
        return this.users.find((user) => user.username === username);
    }

    public async save(data: User) {
     this.users.push(data);
      return data;
    }

    public async findById(id: string): Promise<User | null> {
     return this.users.find((user) => user.id === id) || null;
    
    }
}

export { UsersMemoryRepository }