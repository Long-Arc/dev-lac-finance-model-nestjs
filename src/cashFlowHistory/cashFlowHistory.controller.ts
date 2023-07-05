import {
    Body,
    Controller,
    Get,
    Post,
    Put,
    Query,
    UseGuards,
  } from '@nestjs/common';
  import { Delete, Param } from '@nestjs/common/decorators';
  import { AuthGuard } from '@nestjs/passport';
  import { CashFlowDTO } from 'src/DTO/CashFlowDTO';
  import { SearchDTO } from 'src/DTO/searchDTO';
  import { Factcashflowdetails } from 'src/entities/cashFlowDetails.entity';
  import { Factcashflowdetailshistory } from 'src/entities/cashFlowHistory.entity';
  import { CashFlowHistoryService } from './cashFlowHistory.service';
  
  @Controller('cashFlowHistory')
  export class CashFlowHistoryController {
    constructor(private readonly cashFlowHistoryService: CashFlowHistoryService) {}
  
    //@UseGuards(AuthGuard('jwt'))
    @Get()
    getAll() {
      return this.cashFlowHistoryService.findAll();
    }
  
    @Get('getCashFlowHistoryByRecordId')
    getCashFlowHistoryByRecordId(@Query('recordId') recordId: number) {
      return this.cashFlowHistoryService.getCashFlowHistoryByRecordId(recordId);
    }
  
    // @Post('createCashFlow')
    // createCashFlow(@Body() cashFlow: Factcashflowdetails) {
    //   return this.cashFlowHistoryService.createCashFlowDetail(cashFlow);
    // }
  
    // @Post('bulkUploadCashFlow')
    // bulkUploadCashFlow(@Body() cashFlows: CashFlowDTO[]): any {
    //   return this.cashFlowHistoryService.bulkUploadCashFlow(cashFlows);
    // }
  
    // @Put('updateCashFlow/:id')
    // updateCashFlow(
    //   @Param('id') id: number,
    //   @Body() cashFlow: Factcashflowdetails,
    // ) {
    //   return this.cashFlowHistoryService.updateCashFlowDetail(id, cashFlow);
    // }
  
    @Delete('deleteCashFlow/:id')
    deleteCashFlow(@Param('id') id: number) {
      return this.cashFlowHistoryService.deleteCashFlowDetail(id);
    }
  
    @Post('searchCashFlows')
    searchCashFlowDetails(@Body() searchParams: SearchDTO) {
      return this.cashFlowHistoryService.searchCashFlowDetails(searchParams);
    }
  
    @Get('getDistinctYears')
    getDistinctYears() {
      return this.cashFlowHistoryService.getYears();
    }
  }
  