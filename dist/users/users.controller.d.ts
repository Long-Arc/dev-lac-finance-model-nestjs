import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAll(): Promise<import("../entities/users.entity").Userdetails[]>;
    getUserByUserName(userName: string): Promise<import("../entities/users.entity").Userdetails>;
}
