import { Repository } from 'typeorm';
import { Userdetails } from '../entities/users.entity';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<Userdetails>);
    findAll(): Promise<Userdetails[]>;
    getUserByUserName(userName: string): Promise<Userdetails>;
}
