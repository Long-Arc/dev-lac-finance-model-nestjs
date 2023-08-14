import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dimfundtypes } from 'src/entities/fundTypes.entity';

@Injectable()
export class FundTypesService {
  constructor(
    @InjectRepository(Dimfundtypes)
    private readonly FundTypesRepository: Repository<Dimfundtypes>,
  ) {}

  findAll() {
    return this.FundTypesRepository.find();
  }

  async createFund(
    fund: Dimfundtypes,
  ): Promise<Dimfundtypes> 
  {
    const fundDetail = this.FundTypesRepository.create({
      ...fund,
    });
    return await this.FundTypesRepository.save(fundDetail);
  }

  async getFundTypeByFundId(fundId: number): Promise<Dimfundtypes> {
    const fundType = await this.FundTypesRepository.findOne({
      where: { FundId: fundId },
    });
    return fundType;
  }
}
