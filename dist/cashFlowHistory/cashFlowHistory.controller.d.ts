import { CashFlowDTO } from 'src/DTO/CashFlowDTO';
import { SearchDTO } from 'src/DTO/searchDTO';
import { Factcashflowdetails } from 'src/entities/cashFlowDetails.entity';
import { CashFlowHistoryService } from './cashFlowHistory.service';
export declare class CashFlowHistoryController {
    private readonly cashFlowHistoryService;
    constructor(cashFlowHistoryService: CashFlowHistoryService);
    getAll(): Promise<CashFlowDTO[]>;
    getCashFlowHistoryByRecordId(recordId: number): Promise<Factcashflowdetails>;
    deleteCashFlow(id: number): Promise<any>;
    searchCashFlowDetails(searchParams: SearchDTO): Promise<any>;
    getDistinctYears(): Promise<any>;
}
