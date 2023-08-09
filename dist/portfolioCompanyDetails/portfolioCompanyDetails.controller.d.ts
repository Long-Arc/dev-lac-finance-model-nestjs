import { PortCoDetailsService } from './portfolioCompanyDetails.service';
import { Dimportcodetails } from 'src/entities/portfolioCompanyDetails.entity';
export declare class PortCoDetailsController {
    private readonly portCoDetailsService;
    constructor(portCoDetailsService: PortCoDetailsService);
    getAll(): Promise<Dimportcodetails[]>;
    createPortCo(portCo: Dimportcodetails): Promise<Dimportcodetails>;
    getPortCoDetailsById(portCoId: number): Promise<Dimportcodetails>;
}
