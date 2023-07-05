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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchCashFlowDetailsEntity = void 0;
const typeorm_1 = require("typeorm");
let SearchCashFlowDetailsEntity = class SearchCashFlowDetailsEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SearchCashFlowDetailsEntity.prototype, "RecordId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], SearchCashFlowDetailsEntity.prototype, "PortCoId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], SearchCashFlowDetailsEntity.prototype, "FundId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], SearchCashFlowDetailsEntity.prototype, "ShareClassId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], SearchCashFlowDetailsEntity.prototype, "Date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], SearchCashFlowDetailsEntity.prototype, "InvestmentCost", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], SearchCashFlowDetailsEntity.prototype, "InvEstimatedValue", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SearchCashFlowDetailsEntity.prototype, "CreatedBy", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], SearchCashFlowDetailsEntity.prototype, "CreatedDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SearchCashFlowDetailsEntity.prototype, "ModifiedBy", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], SearchCashFlowDetailsEntity.prototype, "ModifiedDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], SearchCashFlowDetailsEntity.prototype, "VersionId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SearchCashFlowDetailsEntity.prototype, "FundType", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SearchCashFlowDetailsEntity.prototype, "PortCoName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SearchCashFlowDetailsEntity.prototype, "ShareClass", void 0);
SearchCashFlowDetailsEntity = __decorate([
    (0, typeorm_1.Entity)("dbo.udp_SearchCashFlowDetails")
], SearchCashFlowDetailsEntity);
exports.SearchCashFlowDetailsEntity = SearchCashFlowDetailsEntity;
//# sourceMappingURL=searchCashFlowDetails.entity.js.map