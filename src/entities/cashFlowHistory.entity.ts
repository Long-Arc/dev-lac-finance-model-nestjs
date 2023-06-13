import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Factcashflowdetailshistory {
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
  DMLType: string;
}
