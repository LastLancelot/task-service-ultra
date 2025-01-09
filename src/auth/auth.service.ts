import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async register(form: RegisterDto) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(form.password, salt);
    form.password = hash;
    const newUser = this.prisma.user.create(form);
    return;
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
    const payload = await this.jwtService.decode(token);
  }
}
