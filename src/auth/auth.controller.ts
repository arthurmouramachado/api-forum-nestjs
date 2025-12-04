import {
  Body,
  Controller,
  Post,
  Inject,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { Prisma } from 'generated/prisma/browser';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  @Inject()
  private readonly authService: AuthService;

  @Post('signin')
  @HttpCode(HttpStatus.OK)
  async signin(
    @Body() body: Prisma.UserCreateInput,
  ): Promise<{ access_token: string }> {
    return this.authService.signin(body);
  }
}
