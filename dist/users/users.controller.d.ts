import { UsersService } from './users.service';
import { Userdetails } from 'src/entities/users.entity';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAll(): Promise<Userdetails[]>;
    getUserByUserName(userName: string): Promise<Userdetails>;
    createCashFlow(user: Userdetails): Promise<Userdetails>;
    updateCashFlow(email: string, Userdetails: Userdetails): Promise<any>;
}
