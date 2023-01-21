import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prismaService: PrismaService) {}

  async findMany() {
    const count = await this.prismaService.notification.findMany();
    return count;
  }
}
