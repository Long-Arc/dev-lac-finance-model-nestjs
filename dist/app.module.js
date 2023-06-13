"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const cashFlow_module_1 = require("./cashFlowDetails/cashFlow.module");
const fundTypes_module_1 = require("./fundTypes/fundTypes.module");
const portfolioCompanyDetails_module_1 = require("./portfolioCompanyDetails/portfolioCompanyDetails.module");
const shareClass_module_1 = require("./shareClass/shareClass.module");
const users_module_1 = require("./users/users.module");
const config_1 = require("@nestjs/config");
const powerBIReport_module_1 = require("./powerBIReports/powerBIReport.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: 'environment/prod.env',
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mssql',
                host: 'lacdevsql.database.windows.net',
                port: 1433,
                username: 'LACFinance',
                password: 'Test@1234',
                database: 'LACFinance',
                synchronize: false,
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                options: { encrypt: true },
            }),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            fundTypes_module_1.FundTypesModule,
            portfolioCompanyDetails_module_1.PortCoDetailsModule,
            shareClass_module_1.ShareClassModule,
            cashFlow_module_1.CashFlowModule,
            powerBIReport_module_1.PowerBIReportModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map