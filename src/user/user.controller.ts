import { Body, Controller, Post } from '@nestjs/common';
import { UserModel } from 'generated/prisma/models';
import { UserService } from './user.service';
import { Prisma } from 'generated/prisma/browser';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  async signupUser(
    @Body() userData: Prisma.UserCreateInput,
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }
}
