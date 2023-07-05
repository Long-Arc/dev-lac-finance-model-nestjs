import { Strategy } from 'passport-local';
import { Userdetails } from 'src/entities/users.entity';
import { UsersService } from 'src/users/users.service';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private readonly usersService;
    constructor(usersService: UsersService);
    validate(username: string, password: string): Promise<Userdetails>;
}
export {};
