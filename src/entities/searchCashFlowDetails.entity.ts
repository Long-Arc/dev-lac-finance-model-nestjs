import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("dbo.udp_SearchCashFlowDetails")
export class SearchCashFlowDetailsEntity {
    
    @PrimaryGeneratedColumn()
    RecordId: number;
  
    @Column()
    PortCoId: number;
  
    @Column()
    FundId: number;
  
    @Column()
    ShareClassId: number;
  
    @Column()
    Date: Date;
  
    @Column()
    InvestmentCost: number;
  
    @Column()
    InvEstimatedValue: number;
  
    @Column()
    CreatedBy: string;
  
    @Column()
    CreatedDate: Date;
  
    @Column()
    ModifiedBy: string;
  
    @Column()
    ModifiedDate: Date;
  
    @Column()
    VersionId: number;
  
    @Column()
    FundType: string;
  
    @Column()
    PortCoName: string;
  
    @Column()
    ShareClass: string;

}