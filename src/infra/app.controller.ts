import { Controller, Get, Post } from '@nestjs/common'
import { AppService } from './app.service'

@Controller('notifications')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async findMany() {
    return this.appService.findMany()
  }

  @Post('create_random')
  async create_random() {
    return this.appService.create_random()
  }
}
