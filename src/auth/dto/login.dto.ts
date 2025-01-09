import { IsNotEmpty, IsString, IsStrongPassword } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsStrongPassword()
  password: string;
}
