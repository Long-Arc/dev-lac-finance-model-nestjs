import { JwtService } from '@nestjs/jwt';
import { Userdetails } from 'src/entities/users.entity';
export declare class AuthService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    generateToken(payload: Userdetails): unknown;
}
