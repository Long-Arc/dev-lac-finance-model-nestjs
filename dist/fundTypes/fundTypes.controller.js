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
exports.FundTypesController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const fundTypes_service_1 = require("./fundTypes.service");
const fundTypes_entity_1 = require("../entities/fundTypes.entity");
let FundTypesController = class FundTypesController {
    constructor(fundTypesService) {
        this.fundTypesService = fundTypesService;
    }
    getAll() {
        return this.fundTypesService.findAll();
    }
    createFund(user) {
        return this.fundTypesService.createFund(user);
    }
    getFundTypeByFundId(fundId) {
        return this.fundTypesService.getFundTypeByFundId(fundId);
    }
};
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FundTypesController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)('createFund'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [fundTypes_entity_1.Dimfundtypes]),
    __metadata("design:returntype", void 0)
], FundTypesController.prototype, "createFund", null);
__decorate([
    (0, common_1.Get)('getFundTypeByFundId'),
    __param(0, (0, common_1.Query)('fundId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FundTypesController.prototype, "getFundTypeByFundId", null);
FundTypesController = __decorate([
    (0, common_1.Controller)('fundTypes'),
    __metadata("design:paramtypes", [fundTypes_service_1.FundTypesService])
], FundTypesController);
exports.FundTypesController = FundTypesController;
//# sourceMappingURL=fundTypes.controller.js.map