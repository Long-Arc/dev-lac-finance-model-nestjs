import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Userdetails } from '../entities/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Userdetails)
    private readonly usersRepository: Repository<Userdetails>,
  ) {}

  findAll() {
    return this.usersRepository.find();
  }

  async getUserByUserName(userName: string): Promise<Userdetails> {
    const user = await this.usersRepository.findOne({
      where: { EmailId: userName },
    });
    return user;
  }

  async createUser(
    user: Userdetails,
  ): Promise<Userdetails> 
  {
    const userDetail = this.usersRepository.create({
      ...user,
    });
    return await this.usersRepository.save(userDetail);
  }

  async updatePassword(
    email: string,
    Userdetails: Userdetails,
  ): Promise<any> {
    await this.usersRepository.update(email, Userdetails);
    return await this.getUserByUserName(email); //this.cashFlowRepository.save(cashFlowDetail);
  }
}
