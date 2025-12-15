import {
  IsString,
  IsAlpha,
  IsEmail,
  IsNotEmpty,
  Length,
} from 'class-validator';

export class CreateUserDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsEmail()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNotEmpty()
  email: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @Length(3)
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNotEmpty()
  name: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @Length(6)
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsAlpha()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNotEmpty()
  password: string;
}
