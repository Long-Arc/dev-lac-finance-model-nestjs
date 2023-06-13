import { FundTypesService } from './fundTypes.service';
export declare class FundTypesController {
    private readonly fundTypesService;
    constructor(fundTypesService: FundTypesService);
    getAll(): Promise<import("../entities/fundTypes.entity").Dimfundtypes[]>;
    getFundTypeByFundId(fundId: number): Promise<import("../entities/fundTypes.entity").Dimfundtypes>;
}
