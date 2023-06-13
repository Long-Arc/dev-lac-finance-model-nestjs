import { PowerBIReport } from 'src/entities/powerBIReports.entity';
import { PowerBIReportService } from './powerBIReport.service';
export declare class PowerBIReportController {
    private readonly powerBIReportService;
    constructor(powerBIReportService: PowerBIReportService);
    generateAccessToken(): Promise<any>;
    generateEmbedToken(powerBIReport: PowerBIReport): Promise<any>;
}
