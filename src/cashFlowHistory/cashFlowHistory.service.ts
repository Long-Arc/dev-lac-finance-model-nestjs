import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CashFlowDTO } from 'src/DTO/CashFlowDTO';
import { SearchDTO } from 'src/DTO/searchDTO';
import { Factcashflowdetails } from 'src/entities/cashFlowDetails.entity';
import { Dimfundtypes } from 'src/entities/fundTypes.entity';
import { Dimportcodetails } from 'src/entities/portfolioCompanyDetails.entity';
import { Dimshareclass } from 'src/entities/shareClass.entity';
import { Between, Repository, MoreThan, LessThan } from 'typeorm';
import { SearchCashFlowDetailsEntity } from 'src/entities/searchCashFlowDetails.entity';
import { Factcashflowdetailshistory } from 'src/entities/cashFlowHistory.entity';

@Injectable()
export class CashFlowHistoryService {
  constructor(
    @InjectRepository(Factcashflowdetailshistory)
    private readonly cashFlowHistoryRepository: Repository<Factcashflowdetailshistory>,
    @InjectRepository(Factcashflowdetails)
    private readonly cashFlowRepository: Repository<Factcashflowdetails>,
    @InjectRepository(Dimfundtypes)
    private readonly fundTypesRepository: Repository<Dimfundtypes>,
    @InjectRepository(Dimportcodetails)
    private readonly portCoDetailsRepository: Repository<Dimportcodetails>,
    @InjectRepository(Dimshareclass)
    private readonly shareClassRepository: Repository<Dimshareclass>,
    @InjectRepository(SearchCashFlowDetailsEntity)
    private searchCashFlowDetailsRepository: Repository<SearchCashFlowDetailsEntity>,
  ) { }

  //Get all cashflow details
  async findAll() {
    const cashFlowHistory = await this.cashFlowHistoryRepository.find({
      order: { ModifiedDate: { direction: 'DESC' } },
    });
    const fundTypes = await this.fundTypesRepository.find();
    const portfolios = await this.portCoDetailsRepository.find();
    const shareClasses = await this.shareClassRepository.find();

    // //Need to come up with better approach
    const cashFlowDTO: CashFlowDTO[] = cashFlowHistory.map((x) => {
      return {
        ...x,
        FundType: fundTypes.find((f) => f.FundId === x.FundId).FundType,
        PortCoName: portfolios.find((p) => p.PortCoId === x.PortCoId)
          .PortCoName,
        ShareClass: shareClasses.find((s) => s.ShareClassId === x.ShareClassId)
          .ShareClass,
        Date: new Date(x.Date.getTime() + 330 * 60000),
      };
    });
    return cashFlowDTO;
  }

  //Get Cashflow detail by record id
  async getCashFlowHistoryByRecordId(
    recordId: number,
  ): Promise<Factcashflowdetails> {
    const cashFlowHistory = await this.cashFlowHistoryRepository.findOne({
      where: { RecordId: recordId },
    });
    return cashFlowHistory;
  }

  //Create a new Cashflow
  async createCashFlowDetail(
    cashFlow: Factcashflowdetails,
  ): Promise<Factcashflowdetails> {
    const cashFlowHistory = this.cashFlowHistoryRepository.create({
      ...cashFlow,
    });
    return await this.cashFlowHistoryRepository.save(cashFlowHistory);
  }

  //Bulk Upload Cashflow
  async bulkUploadCashFlow(cashFlows: CashFlowDTO[]): Promise<any> {
    let response: any = {};
    try {
      let validFundType: boolean = true;
      let validPortCo: boolean = true;
      let validShareClass: boolean = true;
      const fundTypes = await this.fundTypesRepository.find();
      const portfolios = await this.portCoDetailsRepository.find();
      const shareClasses = await this.shareClassRepository.find();
      const cashFlowDetails: Factcashflowdetails[] = [];

      cashFlows.forEach((cashFlow) => {
        let fundType = fundTypes.find(
          (ft) => ft.FundType === cashFlow.FundType,
        );
        if (!fundType) validFundType = false;

        let portfolio = portfolios.find(
          (pf) => pf.PortCoName === cashFlow.PortCoName,
        );
        if (!portfolio) validPortCo = false;

        let shareClass = shareClasses.find(
          (sc) => sc.ShareClass === cashFlow.ShareClass,
        );
        if (!shareClass) validShareClass = false;
      });

      if (validFundType && validPortCo && validShareClass) {
        cashFlows.forEach((cashFlow) => {
          cashFlowDetails.push({
            PortCoId: portfolios.find(
              (p) => p.PortCoName === cashFlow.PortCoName,
            ).PortCoId,
            FundId: fundTypes.find((f) => f.FundType === cashFlow.FundType)
              .FundId,
            ShareClassId: shareClasses.find(
              (sc) => sc.ShareClass === cashFlow.ShareClass,
            ).ShareClassId,
            InvestmentCost: cashFlow.InvestmentCost,
            InvEstimatedValue: cashFlow.InvEstimatedValue,
            RecordId: null,
            Date: new Date(cashFlow.Date),
            CreatedBy: cashFlow.CreatedBy,
            CreatedDate: new Date(),
            ModifiedBy: cashFlow.CreatedBy,
            ModifiedDate: new Date(),
            VersionId: 1,
          });
        });
        await this.cashFlowHistoryRepository.save(cashFlowDetails, {
          chunk: 150,
        });
        response.severity = 'success';
        response.message = 'Cashflow details uploaded succesfully.';
      } else {
        let message = '';
        if (!validFundType) message = ' Fund Type,';
        if (!validPortCo) message += ' Portfolio,';
        if (!validShareClass) message += ' Share Class';

        let lastChar = message.substr(message.length - 1);
        message = lastChar === ',' ? message.slice(0, -1) : message;
        response.severity = 'error';
        response.message =
          'Invalid' +
          message +
          ' data found in uploaded sheet, please correct them and try again';
      }
      return response;
    } catch (error) {
      console.log(error);
      response.severity = 'error';
      response.message =
        'Failed to upload cashflow details, please contact admin';
      return response;
    }
  }

  //Update a new Cashflow
  async updateCashFlowDetail(
    id: number,
    cashFlow: Factcashflowdetails,
  ): Promise<any> {
    await this.cashFlowHistoryRepository.update(id, cashFlow);
    return await this.getCashFlowHistoryByRecordId(id); //this.cashFlowRepository.save(cashFlowDetail);
  }

  //Delete a cashflow
  async deleteCashFlowDetail(id: number): Promise<any> {
    return this.cashFlowHistoryRepository.delete(id);
  }

  //search cashflow
  async searchCashFlowDetails(searchParams: SearchDTO): Promise<any> {
    let queryResult;
    let startDate = searchParams.startDate ? "'" + searchParams.startDate + "'" : null;
    let endDate = searchParams.endDate ? "'" + searchParams.endDate + "'" : null;

    if (searchParams) {
      let sql = `exec dbo.udp_SearchCashFlowDetails 
        @PortCoId = ${searchParams.PortCoId}, 
        @FundId = ${searchParams.FundId}, 
        @ShareClassId = ${searchParams.ShareClassId}, 
        @startDate = ${startDate}, 
        @endDate = ${endDate}`;
      await this.searchCashFlowDetailsRepository.query(sql)
        .then(res => {
          queryResult = res;
        })
        .catch((exception) => {
          throw exception;
        });
    }
    return queryResult;
  }

  async getYears(): Promise<any> {
    return this.cashFlowHistoryRepository
      .query(`SELECT DISTINCT(YEAR(Date)) Year FROM factCashFlowHistory
    ORDER BY YEAR(Date) DESC`);
  }
}
