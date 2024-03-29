import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CashFlowModule } from './cashFlowDetails/cashFlow.module';
import { FundTypesModule } from './fundTypes/fundTypes.module';
import { PortCoDetailsModule } from './portfolioCompanyDetails/portfolioCompanyDetails.module';
import { ShareClassModule } from './shareClass/shareClass.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config'
import { PowerBIReportModule } from './powerBIReports/powerBIReport.module';
import { CashFlowHistoryModule } from './cashFlowHistory/cashFlowHistory.module';
import { EmailModule } from './email/email.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      // type: 'mssql',
      // host: 'localhost',
      // port: 1433,
      // username: 'krishna',
      // password: 'pass1234',
      // database: 'DWFinance',
      // synchronize: false,
      // entities: [__dirname + '/**/*.entity{.ts,.js}'],
      // options: { encrypt: false },

      type: 'mssql',
      host: 'lacdevsql.database.windows.net',
      port: 1433,
      username: 'LACFinance',
      password: 'Test@1234',
      database: 'LACFinance',
      synchronize: false,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      options: { encrypt: true },
    }),
    UsersModule,
    AuthModule,
    FundTypesModule,
    PortCoDetailsModule,
    ShareClassModule,
    CashFlowModule,
    PowerBIReportModule,
    CashFlowHistoryModule,
    EmailModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
