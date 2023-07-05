"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FundTypesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const fundTypes_controller_1 = require("./fundTypes.controller");
const fundTypes_entity_1 = require("../entities/fundTypes.entity");
const fundTypes_service_1 = require("./fundTypes.service");
let FundTypesModule = class FundTypesModule {
};
FundTypesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([fundTypes_entity_1.Dimfundtypes])],
        controllers: [fundTypes_controller_1.FundTypesController],
        providers: [fundTypes_service_1.FundTypesService],
        exports: [fundTypes_service_1.FundTypesService],
    })
], FundTypesModule);
exports.FundTypesModule = FundTypesModule;
//# sourceMappingURL=fundTypes.module.js.map