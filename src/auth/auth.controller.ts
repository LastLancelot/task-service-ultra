import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { IAuthController } from './interfaces/auth.controller.interface';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController implements IAuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
  ) {}
  async register(form: RegisterDto) {}
  async login() {}
  async extractPayload(token: string) {}
  async checkUsernameExistance(username: string) {}
}
