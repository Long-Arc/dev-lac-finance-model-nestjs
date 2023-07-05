"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashFlowHistoryModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cashFlowDetails_entity_1 = require("../entities/cashFlowDetails.entity");
const fundTypes_entity_1 = require("../entities/fundTypes.entity");
const portfolioCompanyDetails_entity_1 = require("../entities/portfolioCompanyDetails.entity");
const shareClass_entity_1 = require("../entities/shareClass.entity");
const searchCashFlowDetails_entity_1 = require("../entities/searchCashFlowDetails.entity");
const cashFlowHistory_controller_1 = require("./cashFlowHistory.controller");
const cashFlowHistory_service_1 = require("./cashFlowHistory.service");
const cashFlowHistory_entity_1 = require("../entities/cashFlowHistory.entity");
let CashFlowHistoryModule = class CashFlowHistoryModule {
};
CashFlowHistoryModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                cashFlowHistory_entity_1.Factcashflowdetailshistory,
                cashFlowDetails_entity_1.Factcashflowdetails,
                fundTypes_entity_1.Dimfundtypes,
                portfolioCompanyDetails_entity_1.Dimportcodetails,
                shareClass_entity_1.Dimshareclass,
                searchCashFlowDetails_entity_1.SearchCashFlowDetailsEntity
            ]),
        ],
        controllers: [cashFlowHistory_controller_1.CashFlowHistoryController],
        providers: [cashFlowHistory_service_1.CashFlowHistoryService],
        exports: [cashFlowHistory_service_1.CashFlowHistoryService],
    })
], CashFlowHistoryModule);
exports.CashFlowHistoryModule = CashFlowHistoryModule;
//# sourceMappingURL=cashFlowHistory.module.js.map