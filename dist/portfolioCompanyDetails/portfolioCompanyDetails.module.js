"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortCoDetailsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const portfolioCompanyDetails_controller_1 = require("./portfolioCompanyDetails.controller");
const portfolioCompanyDetails_entity_1 = require("../entities/portfolioCompanyDetails.entity");
const portfolioCompanyDetails_service_1 = require("./portfolioCompanyDetails.service");
let PortCoDetailsModule = class PortCoDetailsModule {
};
PortCoDetailsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([portfolioCompanyDetails_entity_1.Dimportcodetails])],
        controllers: [portfolioCompanyDetails_controller_1.PortCoDetailsController],
        providers: [portfolioCompanyDetails_service_1.PortCoDetailsService],
        exports: [portfolioCompanyDetails_service_1.PortCoDetailsService],
    })
], PortCoDetailsModule);
exports.PortCoDetailsModule = PortCoDetailsModule;
//# sourceMappingURL=portfolioCompanyDetails.module.js.map