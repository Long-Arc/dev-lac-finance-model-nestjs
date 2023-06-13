import { Dimshareclass } from 'src/entities/shareClass.entity';
import { ShareClassService } from './shareClass.service';
export declare class ShareClassController {
    private readonly shareClassService;
    constructor(shareClassService: ShareClassService);
    getAll(): Promise<Dimshareclass[]>;
    getShareClassById(shareClassId: number): Promise<Dimshareclass>;
    createCashFlow(shareClass: Dimshareclass): Promise<Dimshareclass>;
}
