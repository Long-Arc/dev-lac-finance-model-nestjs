"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PowerBIReportService = void 0;
const common_1 = require("@nestjs/common");
const request = require("request");
let PowerBIReportService = class PowerBIReportService {
    async generateAccessToken() {
        let formBody = [];
        let url = 'https://login.microsoftonline.com/369e99eb-38f4-4e0a-8786-2bf9cb835962/oauth2/v2.0/token';
        let rowData = {
            client_id: 'c48407f2-19b3-421c-afeb-e6a9b271e9af',
            scope: 'https://analysis.windows.net/powerbi/api/.default',
            client_secret: 'LDO8Q~Hn5bxhUbPoGdg9ZA9q4QAEStrk8JRNjaLc',
            grant_type: 'client_credentials',
        };
        for (let row in rowData) {
            let key = encodeURIComponent(row);
            let value = encodeURIComponent(rowData[row]);
            formBody.push(key + '=' + value);
        }
        let body = formBody.join('&');
        return new Promise(function (resolve, reject) {
            request({
                url: url,
                method: 'POST',
                shouldKeepAlive: false,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Access-Control-Allow-Origin': '*'
                },
                body: body,
            }, function (error, res, data) {
                resolve(JSON.parse(data));
            });
        });
    }
    async generateEmbedToken(powerBIReport) {
        let url = 'https://api.powerbi.com/v1.0/myorg/groups/group_id/reports/report_id/GenerateToken'.replace('group_id', powerBIReport.groupId).replace('report_id', powerBIReport.reportId);
        let rowData = {
            accessLevel: powerBIReport.accessLevel,
            allowSaveAs: powerBIReport.allowSaveAs
        };
        return new Promise(function (resolve, reject) {
            request({
                url: url,
                method: 'POST',
                shouldKeepAlive: false,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${powerBIReport.accessToken}`,
                },
                body: JSON.stringify(rowData),
            }, function (error, res, data) {
                resolve(JSON.parse(data));
            });
        });
    }
};
PowerBIReportService = __decorate([
    (0, common_1.Injectable)()
], PowerBIReportService);
exports.PowerBIReportService = PowerBIReportService;
//# sourceMappingURL=powerBIReport.service.js.map