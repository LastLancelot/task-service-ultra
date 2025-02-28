import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { IAuthService } from './interfaces/auth.service.interface';
import { randomUUID } from 'crypto';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async register(form: RegisterDto) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(form.password, salt);
    form.password = hash;
    const newUser = this.prisma.user.create({
      data: { ...form, id: randomUUID() },
      select: { id: true, email: true, username: true },
    });
    return newUser;
  }

  async login() {
    return;
  }

  async checkUsernameExistance(username: string) {
    return !!(await this.prisma.user.findFirst({
      where: { username: username },
    }));
  }

  async extractPayload(token: string) {
    if (token.includes('Bearer ')) token = token.split(' ')[1];
    return await this.jwtService.decode(token);
  }
}
