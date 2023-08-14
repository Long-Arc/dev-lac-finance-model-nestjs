import { Body, Controller, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';
import { Userdetails } from 'src/entities/users.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  //@UseGuards(AuthGuard('jwt'))
  @Get()
  getAll() {
    return this.usersService.findAll();
  }

  @Get('getUserByUserName')
  getUserByUserName(@Query('userName') userName: string) {
    return this.usersService.getUserByUserName(userName);
  }

  @Post('createUser')
  createUser(@Body() user: Userdetails) {
    return this.usersService.createUser(user);
  }

  @Put('updatePassword/:email')
  updatePassword(
    @Param('email') email : string,
    @Body() Userdetails: Userdetails,
  ) {
    console.log("Createeeeeeeeeeeeeeeeeeeeee user");
    return this.usersService.updatePassword(email, Userdetails);
  }
}
