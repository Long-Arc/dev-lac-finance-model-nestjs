import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PortCoDetailsService } from './portfolioCompanyDetails.service';
import { Dimportcodetails } from 'src/entities/portfolioCompanyDetails.entity';

@Controller('portCoDetails')
export class PortCoDetailsController {
  constructor(private readonly portCoDetailsService: PortCoDetailsService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  getAll() {
    return this.portCoDetailsService.findAll();
  }

  @Post('createPortCo')
  createPortCo(@Body() portCo: Dimportcodetails) {
    return this.portCoDetailsService.createPortCo(portCo);
  }

  @Get('getPortCoDetailsById')
  getPortCoDetailsById(@Query('portCoId') portCoId: number) {
    return this.portCoDetailsService.getPortCoDetailsById(portCoId);
  }
}
