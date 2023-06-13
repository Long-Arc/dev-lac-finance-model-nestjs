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
exports.CashFlowHistoryController = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("@nestjs/common/decorators");
const cashFlowHistory_service_1 = require("./cashFlowHistory.service");
let CashFlowHistoryController = class CashFlowHistoryController {
    constructor(cashFlowHistoryService) {
        this.cashFlowHistoryService = cashFlowHistoryService;
    }
    getAll() {
        return this.cashFlowHistoryService.findAll();
    }
    getCashFlowHistoryByRecordId(recordId) {
        return this.cashFlowHistoryService.getCashFlowHistoryByRecordId(recordId);
    }
    deleteCashFlow(id) {
        return this.cashFlowHistoryService.deleteCashFlowDetail(id);
    }
    searchCashFlowDetails(searchParams) {
        return this.cashFlowHistoryService.searchCashFlowDetails(searchParams);
    }
    getDistinctYears() {
        return this.cashFlowHistoryService.getYears();
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CashFlowHistoryController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('getCashFlowHistoryByRecordId'),
    __param(0, (0, common_1.Query)('recordId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CashFlowHistoryController.prototype, "getCashFlowHistoryByRecordId", null);
__decorate([
    (0, decorators_1.Delete)('deleteCashFlow/:id'),
    __param(0, (0, decorators_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CashFlowHistoryController.prototype, "deleteCashFlow", null);
__decorate([
    (0, common_1.Post)('searchCashFlows'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CashFlowHistoryController.prototype, "searchCashFlowDetails", null);
__decorate([
    (0, common_1.Get)('getDistinctYears'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CashFlowHistoryController.prototype, "getDistinctYears", null);
CashFlowHistoryController = __decorate([
    (0, common_1.Controller)('cashFlowHistory'),
    __metadata("design:paramtypes", [cashFlowHistory_service_1.CashFlowHistoryService])
], CashFlowHistoryController);
exports.CashFlowHistoryController = CashFlowHistoryController;
//# sourceMappingURL=cashFlowHistory.controller.js.map