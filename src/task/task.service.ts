import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TaskService {
    constructor(private readonly prisma: PrismaService) {}

    async create() {
        return;
    }

    async update() {
        return;
    }

    async getOneById() {
        return;
    }

    async getUsersTask() {
        return;
    }
}
