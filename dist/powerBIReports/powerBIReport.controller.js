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
exports.PowerBIReportController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const powerBIReport_service_1 = require("./powerBIReport.service");
let PowerBIReportController = class PowerBIReportController {
    constructor(powerBIReportService) {
        this.powerBIReportService = powerBIReportService;
    }
    generateAccessToken() {
        return this.powerBIReportService.generateAccessToken();
    }
    generateEmbedToken(powerBIReport) {
        return this.powerBIReportService.generateEmbedToken(powerBIReport);
    }
};
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Post)('generateAccessToken'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PowerBIReportController.prototype, "generateAccessToken", null);
__decorate([
    (0, common_1.Post)('generateEmbedToken'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PowerBIReportController.prototype, "generateEmbedToken", null);
PowerBIReportController = __decorate([
    (0, common_1.Controller)('powerBIReport'),
    __metadata("design:paramtypes", [powerBIReport_service_1.PowerBIReportService])
], PowerBIReportController);
exports.PowerBIReportController = PowerBIReportController;
//# sourceMappingURL=powerBIReport.controller.js.map