import { Repository } from 'typeorm';
import { Dimshareclass } from 'src/entities/shareClass.entity';
export declare class ShareClassService {
    private readonly shareClassRepository;
    constructor(shareClassRepository: Repository<Dimshareclass>);
    findAll(): Promise<Dimshareclass[]>;
    getShareClassById(shareClassId: number): Promise<Dimshareclass>;
    createShareClass(shareclass: Dimshareclass): Promise<Dimshareclass>;
}
