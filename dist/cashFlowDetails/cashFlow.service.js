"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashFlowService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cashFlowDetails_entity_1 = require("../entities/cashFlowDetails.entity");
const fundTypes_entity_1 = require("../entities/fundTypes.entity");
const portfolioCompanyDetails_entity_1 = require("../entities/portfolioCompanyDetails.entity");
const shareClass_entity_1 = require("../entities/shareClass.entity");
const typeorm_2 = require("typeorm");
const searchCashFlowDetails_entity_1 = require("../entities/searchCashFlowDetails.entity");
let CashFlowService = class CashFlowService {
    constructor(cashFlowRepository, fundTypesRepository, portCoDetailsRepository, shareClassRepository, searchCashFlowDetailsRepository) {
        this.cashFlowRepository = cashFlowRepository;
        this.fundTypesRepository = fundTypesRepository;
        this.portCoDetailsRepository = portCoDetailsRepository;
        this.shareClassRepository = shareClassRepository;
        this.searchCashFlowDetailsRepository = searchCashFlowDetailsRepository;
    }
    async findAll() {
        const cashFlowDetails = await this.cashFlowRepository.find({
            order: { ModifiedDate: { direction: 'DESC' } },
        });
        const fundTypes = await this.fundTypesRepository.find();
        const portfolios = await this.portCoDetailsRepository.find();
        const shareClasses = await this.shareClassRepository.find();
        const cashFlowDetailsDTO = cashFlowDetails.map((x) => {
            return Object.assign(Object.assign({}, x), { FundType: fundTypes.find((f) => f.FundId === x.FundId).FundType, PortCoName: portfolios.find((p) => p.PortCoId === x.PortCoId)
                    .PortCoName, ShareClass: shareClasses.find((s) => s.ShareClassId === x.ShareClassId)
                    .ShareClass, Date: new Date(x.Date.getTime() + 330 * 60000) });
        });
        return cashFlowDetailsDTO;
    }
    async getCashFlowDetailsByRecordId(recordId) {
        const cashFlowDetails = await this.cashFlowRepository.findOne({
            where: { RecordId: recordId },
        });
        return cashFlowDetails;
    }
    async createCashFlowDetail(cashFlow) {
        const cashFlowDetail = this.cashFlowRepository.create(Object.assign({}, cashFlow));
        return await this.cashFlowRepository.save(cashFlowDetail);
    }
    async bulkUploadCashFlow(cashFlows) {
        let response = {};
        try {
            let validFundType = true;
            let validPortCo = true;
            let validShareClass = true;
            const fundTypes = await this.fundTypesRepository.find();
            const portfolios = await this.portCoDetailsRepository.find();
            const shareClasses = await this.shareClassRepository.find();
            const cashFlowDetails = [];
            cashFlows.forEach((cashFlow) => {
                let fundType = fundTypes.find((ft) => ft.FundType === cashFlow.FundType);
                if (!fundType)
                    validFundType = false;
                let portfolio = portfolios.find((pf) => pf.PortCoName === cashFlow.PortCoName);
                if (!portfolio)
                    validPortCo = false;
                let shareClass = shareClasses.find((sc) => sc.ShareClass === cashFlow.ShareClass);
                if (!shareClass)
                    validShareClass = false;
            });
            if (validFundType && validPortCo && validShareClass) {
                cashFlows.forEach((cashFlow) => {
                    cashFlowDetails.push({
                        PortCoId: portfolios.find((p) => p.PortCoName === cashFlow.PortCoName).PortCoId,
                        FundId: fundTypes.find((f) => f.FundType === cashFlow.FundType)
                            .FundId,
                        ShareClassId: shareClasses.find((sc) => sc.ShareClass === cashFlow.ShareClass).ShareClassId,
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
                await this.cashFlowRepository.save(cashFlowDetails, {
                    chunk: 150,
                });
                response.severity = 'success';
                response.message = 'Cashflow details uploaded succesfully.';
            }
            else {
                let message = '';
                if (!validFundType)
                    message = ' Fund Type,';
                if (!validPortCo)
                    message += ' Portfolio,';
                if (!validShareClass)
                    message += ' Share Class';
                let lastChar = message.substr(message.length - 1);
                message = lastChar === ',' ? message.slice(0, -1) : message;
                response.severity = 'error';
                response.message =
                    'Invalid' +
                        message +
                        ' data found in uploaded sheet, please correct them and try again';
            }
            return response;
        }
        catch (error) {
            console.log(error);
            response.severity = 'error';
            response.message =
                'Failed to upload cashflow details, please contact admin';
            return response;
        }
    }
    async updateCashFlowDetail(id, cashFlow) {
        await this.cashFlowRepository.update(id, cashFlow);
        return await this.getCashFlowDetailsByRecordId(id);
    }
    async deleteCashFlowDetail(id) {
        return this.cashFlowRepository.delete(id);
    }
    async searchCashFlowDetails(searchParams) {
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
    async getYears() {
        return this.cashFlowRepository
            .query(`SELECT DISTINCT(YEAR(Date)) Year FROM factCashFlowDetails
    ORDER BY YEAR(Date) DESC`);
    }
};
CashFlowService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cashFlowDetails_entity_1.Factcashflowdetails)),
    __param(1, (0, typeorm_1.InjectRepository)(fundTypes_entity_1.Dimfundtypes)),
    __param(2, (0, typeorm_1.InjectRepository)(portfolioCompanyDetails_entity_1.Dimportcodetails)),
    __param(3, (0, typeorm_1.InjectRepository)(shareClass_entity_1.Dimshareclass)),
    __param(4, (0, typeorm_1.InjectRepository)(searchCashFlowDetails_entity_1.SearchCashFlowDetailsEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], CashFlowService);
exports.CashFlowService = CashFlowService;
//# sourceMappingURL=cashFlow.service.js.map