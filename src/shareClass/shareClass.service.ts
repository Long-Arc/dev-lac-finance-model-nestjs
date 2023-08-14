import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dimshareclass } from 'src/entities/shareClass.entity';

@Injectable()
export class ShareClassService {
  constructor(
    @InjectRepository(Dimshareclass)
    private readonly shareClassRepository: Repository<Dimshareclass>,
  ) {}

  findAll() {
    return this.shareClassRepository.find();
  }
  async getShareClassById(shareClassId: number): Promise<Dimshareclass> {
    const shareClass = await this.shareClassRepository.findOne({
      where: { ShareClassId: shareClassId },
    });
    return shareClass;
  }

  async createShareClass(
    shareclass: Dimshareclass,
  ): Promise<Dimshareclass> 
  {
    const shareclassdetail = this.shareClassRepository.create({
      ...shareclass,
    });
    return await this.shareClassRepository.save(shareclassdetail);
  }
}
