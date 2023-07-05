import { PortCoDetailsService } from './portfolioCompanyDetails.service';
export declare class PortCoDetailsController {
    private readonly portCoDetailsService;
    constructor(portCoDetailsService: PortCoDetailsService);
    getAll(): Promise<import("../entities/portfolioCompanyDetails.entity").Dimportcodetails[]>;
    getPortCoDetailsById(portCoId: number): Promise<import("../entities/portfolioCompanyDetails.entity").Dimportcodetails>;
}
