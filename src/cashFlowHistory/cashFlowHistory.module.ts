import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Factcashflowdetails } from 'src/entities/cashFlowDetails.entity';
import { Dimfundtypes } from 'src/entities/fundTypes.entity';
import { Dimportcodetails } from 'src/entities/portfolioCompanyDetails.entity';
import { Dimshareclass } from 'src/entities/shareClass.entity';
import { SearchCashFlowDetailsEntity } from 'src/entities/searchCashFlowDetails.entity';
import { CashFlowHistoryController } from './cashFlowHistory.controller';
import { CashFlowHistoryService } from './cashFlowHistory.service';
import { Factcashflowdetailshistory } from 'src/entities/cashFlowHistory.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Factcashflowdetailshistory,
      Factcashflowdetails,
      Dimfundtypes,
      Dimportcodetails,
      Dimshareclass,
      SearchCashFlowDetailsEntity
    ]),
  ],
  controllers: [CashFlowHistoryController],
  providers: [CashFlowHistoryService],
  exports: [CashFlowHistoryService],
})
export class CashFlowHistoryModule {}
