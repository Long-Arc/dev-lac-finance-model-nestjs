import { Repository } from 'typeorm';
import { Dimportcodetails } from 'src/entities/portfolioCompanyDetails.entity';
export declare class PortCoDetailsService {
    private readonly PortCoDetailsRepository;
    constructor(PortCoDetailsRepository: Repository<Dimportcodetails>);
    findAll(): Promise<Dimportcodetails[]>;
    createPortCo(portCo: Dimportcodetails): Promise<Dimportcodetails>;
    getPortCoDetailsById(portCoId: number): Promise<Dimportcodetails>;
}
