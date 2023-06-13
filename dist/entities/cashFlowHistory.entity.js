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
exports.Factcashflowdetailshistory = void 0;
const typeorm_1 = require("typeorm");
let Factcashflowdetailshistory = class Factcashflowdetailshistory {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Factcashflowdetailshistory.prototype, "RecordId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Factcashflowdetailshistory.prototype, "PortCoId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Factcashflowdetailshistory.prototype, "FundId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Factcashflowdetailshistory.prototype, "ShareClassId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Factcashflowdetailshistory.prototype, "Date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Factcashflowdetailshistory.prototype, "InvestmentCost", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Factcashflowdetailshistory.prototype, "InvEstimatedValue", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Factcashflowdetailshistory.prototype, "CreatedBy", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Factcashflowdetailshistory.prototype, "CreatedDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Factcashflowdetailshistory.prototype, "ModifiedBy", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Factcashflowdetailshistory.prototype, "ModifiedDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Factcashflowdetailshistory.prototype, "VersionId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Factcashflowdetailshistory.prototype, "DMLType", void 0);
Factcashflowdetailshistory = __decorate([
    (0, typeorm_1.Entity)()
], Factcashflowdetailshistory);
exports.Factcashflowdetailshistory = Factcashflowdetailshistory;
//# sourceMappingURL=cashFlowHistory.entity.js.map