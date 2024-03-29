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
exports.FundTypesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const fundTypes_entity_1 = require("../entities/fundTypes.entity");
let FundTypesService = class FundTypesService {
    constructor(FundTypesRepository) {
        this.FundTypesRepository = FundTypesRepository;
    }
    findAll() {
        return this.FundTypesRepository.find();
    }
    async createFund(fund) {
        const fundDetail = this.FundTypesRepository.create(Object.assign({}, fund));
        return await this.FundTypesRepository.save(fundDetail);
    }
    async getFundTypeByFundId(fundId) {
        const fundType = await this.FundTypesRepository.findOne({
            where: { FundId: fundId },
        });
        return fundType;
    }
};
FundTypesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(fundTypes_entity_1.Dimfundtypes)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FundTypesService);
exports.FundTypesService = FundTypesService;
//# sourceMappingURL=fundTypes.service.js.map