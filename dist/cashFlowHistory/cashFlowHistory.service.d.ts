import { CashFlowDTO } from 'src/DTO/CashFlowDTO';
import { SearchDTO } from 'src/DTO/searchDTO';
import { Factcashflowdetails } from 'src/entities/cashFlowDetails.entity';
import { Dimfundtypes } from 'src/entities/fundTypes.entity';
import { Dimportcodetails } from 'src/entities/portfolioCompanyDetails.entity';
import { Dimshareclass } from 'src/entities/shareClass.entity';
import { Repository } from 'typeorm';
import { SearchCashFlowDetailsEntity } from 'src/entities/searchCashFlowDetails.entity';
import { Factcashflowdetailshistory } from 'src/entities/cashFlowHistory.entity';
export declare class CashFlowHistoryService {
    private readonly cashFlowHistoryRepository;
    private readonly cashFlowRepository;
    private readonly fundTypesRepository;
    private readonly portCoDetailsRepository;
    private readonly shareClassRepository;
    private searchCashFlowDetailsRepository;
    constructor(cashFlowHistoryRepository: Repository<Factcashflowdetailshistory>, cashFlowRepository: Repository<Factcashflowdetails>, fundTypesRepository: Repository<Dimfundtypes>, portCoDetailsRepository: Repository<Dimportcodetails>, shareClassRepository: Repository<Dimshareclass>, searchCashFlowDetailsRepository: Repository<SearchCashFlowDetailsEntity>);
    findAll(): Promise<CashFlowDTO[]>;
    getCashFlowHistoryByRecordId(recordId: number): Promise<Factcashflowdetails>;
    createCashFlowDetail(cashFlow: Factcashflowdetails): Promise<Factcashflowdetails>;
    bulkUploadCashFlow(cashFlows: CashFlowDTO[]): Promise<any>;
    updateCashFlowDetail(id: number, cashFlow: Factcashflowdetails): Promise<any>;
    deleteCashFlowDetail(id: number): Promise<any>;
    searchCashFlowDetails(searchParams: SearchDTO): Promise<any>;
    getYears(): Promise<any>;
}
