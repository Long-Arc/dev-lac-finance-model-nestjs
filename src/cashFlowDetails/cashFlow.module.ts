import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CashFlowController } from './cashFlow.controller';
import { Factcashflowdetails } from 'src/entities/cashFlowDetails.entity';
import { CashFlowService } from './cashFlow.service';
import { Dimfundtypes } from 'src/entities/fundTypes.entity';
import { Dimportcodetails } from 'src/entities/portfolioCompanyDetails.entity';
import { Dimshareclass } from 'src/entities/shareClass.entity';
import { SearchCashFlowDetailsEntity } from 'src/entities/searchCashFlowDetails.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Factcashflowdetails,
      Dimfundtypes,
      Dimportcodetails,
      Dimshareclass,
      SearchCashFlowDetailsEntity
    ]),
  ],
  controllers: [CashFlowController],
  providers: [CashFlowService],
  exports: [CashFlowService],
})
export class CashFlowModule {}
