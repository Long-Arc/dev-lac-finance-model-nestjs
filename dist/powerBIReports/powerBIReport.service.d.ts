import { PowerBIReport } from 'src/entities/powerBIReports.entity';
export declare class PowerBIReportService {
    generateAccessToken(): Promise<any>;
    generateEmbedToken(powerBIReport: PowerBIReport): Promise<any>;
}
