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
exports.CashFlowController = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("@nestjs/common/decorators");
const cashFlowDetails_entity_1 = require("../entities/cashFlowDetails.entity");
const cashFlow_service_1 = require("./cashFlow.service");
let CashFlowController = class CashFlowController {
    constructor(cashFlowService) {
        this.cashFlowService = cashFlowService;
    }
    getAll() {
        return this.cashFlowService.findAll();
    }
    getCashFlowDetailsByRecordId(recordId) {
        return this.cashFlowService.getCashFlowDetailsByRecordId(recordId);
    }
    createCashFlow(cashFlow) {
        return this.cashFlowService.createCashFlowDetail(cashFlow);
    }
    bulkUploadCashFlow(cashFlows) {
        return this.cashFlowService.bulkUploadCashFlow(cashFlows);
    }
    updateCashFlow(id, cashFlow) {
        return this.cashFlowService.updateCashFlowDetail(id, cashFlow);
    }
    deleteCashFlow(id) {
        return this.cashFlowService.deleteCashFlowDetail(id);
    }
    searchCashFlowDetails(searchParams) {
        return this.cashFlowService.searchCashFlowDetails(searchParams);
    }
    getDistinctYears() {
        return this.cashFlowService.getYears();
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CashFlowController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('getCashFlowDetailsByRecordId'),
    __param(0, (0, common_1.Query)('recordId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CashFlowController.prototype, "getCashFlowDetailsByRecordId", null);
__decorate([
    (0, common_1.Post)('createCashFlow'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cashFlowDetails_entity_1.Factcashflowdetails]),
    __metadata("design:returntype", void 0)
], CashFlowController.prototype, "createCashFlow", null);
__decorate([
    (0, common_1.Post)('bulkUploadCashFlow'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Object)
], CashFlowController.prototype, "bulkUploadCashFlow", null);
__decorate([
    (0, common_1.Put)('updateCashFlow/:id'),
    __param(0, (0, decorators_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, cashFlowDetails_entity_1.Factcashflowdetails]),
    __metadata("design:returntype", void 0)
], CashFlowController.prototype, "updateCashFlow", null);
__decorate([
    (0, decorators_1.Delete)('deleteCashFlow/:id'),
    __param(0, (0, decorators_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CashFlowController.prototype, "deleteCashFlow", null);
__decorate([
    (0, common_1.Post)('searchCashFlows'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CashFlowController.prototype, "searchCashFlowDetails", null);
__decorate([
    (0, common_1.Get)('getDistinctYears'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CashFlowController.prototype, "getDistinctYears", null);
CashFlowController = __decorate([
    (0, common_1.Controller)('cashFlow'),
    __metadata("design:paramtypes", [cashFlow_service_1.CashFlowService])
], CashFlowController);
exports.CashFlowController = CashFlowController;
//# sourceMappingURL=cashFlow.controller.js.map