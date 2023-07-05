import { UsersService } from './users.service';
import { Userdetails } from 'src/entities/users.entity';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAll(): Promise<Userdetails[]>;
    getUserByUserName(userName: string): Promise<Userdetails>;
    createUser(user: Userdetails): Promise<Userdetails>;
    updatePassword(email: string, Userdetails: Userdetails): Promise<any>;
}
