import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from 'src/user/user.service';
import { ICooperationService } from './interfaces/cooperation.service.interface';

@Injectable()
export class CooperationService implements ICooperationService {
  constructor(
    private readonly userService: UserService,
    private readonly prisma: PrismaService,
  ) {}

  async getAllByUSer(userId: string) {}
  async getById(id: string) {}
  async create(data: any) {}
  async update(id: string, data: any) {}
  async delete(id: string) {}
}
