import { CashFlowDTO } from 'src/DTO/CashFlowDTO';
import { SearchDTO } from 'src/DTO/searchDTO';
import { Factcashflowdetails } from 'src/entities/cashFlowDetails.entity';
import { CashFlowService } from './cashFlow.service';
export declare class CashFlowController {
    private readonly cashFlowService;
    constructor(cashFlowService: CashFlowService);
    getAll(): Promise<CashFlowDTO[]>;
    getCashFlowDetailsByRecordId(recordId: number): Promise<Factcashflowdetails>;
    createCashFlow(cashFlow: Factcashflowdetails): Promise<Factcashflowdetails>;
    bulkUploadCashFlow(cashFlows: CashFlowDTO[]): any;
    updateCashFlow(id: number, cashFlow: Factcashflowdetails): Promise<any>;
    deleteCashFlow(id: number): Promise<any>;
    searchCashFlowDetails(searchParams: SearchDTO): Promise<any>;
    getDistinctYears(): Promise<any>;
}
