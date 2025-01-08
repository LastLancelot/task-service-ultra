import { Controller, Get, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class CooperationService {
  constructor(
    private readonly userService: UserService,
    private readonly prisma: PrismaService,
  ) {}
}
