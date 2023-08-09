import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FundTypesService } from './fundTypes.service';
import { Dimfundtypes } from 'src/entities/fundTypes.entity';


@Controller('fundTypes')
export class FundTypesController {
  constructor(private readonly fundTypesService: FundTypesService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  getAll() {
    return this.fundTypesService.findAll();
  }

  @Post('createFund')
  createFund(@Body() user: Dimfundtypes) {
    return this.fundTypesService.createFund(user);
  }

  @Get('getFundTypeByFundId')
  getFundTypeByFundId(@Query('fundId') fundId: number) {
    return this.fundTypesService.getFundTypeByFundId(fundId);
  }
}
