import { Repository } from 'typeorm';
import { Dimfundtypes } from 'src/entities/fundTypes.entity';
export declare class FundTypesService {
    private readonly FundTypesRepository;
    constructor(FundTypesRepository: Repository<Dimfundtypes>);
    findAll(): Promise<Dimfundtypes[]>;
    getFundTypeByFundId(fundId: number): Promise<Dimfundtypes>;
}
