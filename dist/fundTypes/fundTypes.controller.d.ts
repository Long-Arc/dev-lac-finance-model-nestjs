import { FundTypesService } from './fundTypes.service';
import { Dimfundtypes } from 'src/entities/fundTypes.entity';
export declare class FundTypesController {
    private readonly fundTypesService;
    constructor(fundTypesService: FundTypesService);
    getAll(): Promise<Dimfundtypes[]>;
    createFund(user: Dimfundtypes): Promise<Dimfundtypes>;
    getFundTypeByFundId(fundId: number): Promise<Dimfundtypes>;
}
