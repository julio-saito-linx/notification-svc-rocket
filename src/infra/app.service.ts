import { Injectable, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto';

@Injectable()
export class AppService {
  constructor(private readonly prismaService: PrismaService) {}

  async findMany() {
    const count = await this.prismaService.notification.findMany();
    return count;
  }

  async create_random() {
    const created = await this.prismaService.notification.create({
      data: {
        id: randomUUID(),
        recipient_id: randomUUID(),
        content: `Nova notificação em ${new Date().toLocaleString()}`,
        category: `category_${Math.floor(Math.random() * 6)}`,
      },
    });
    return created;
  }
}
