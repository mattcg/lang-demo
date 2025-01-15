import { Controller, Get } from '@nestjs/common';
import tags from 'language-tags';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    if (!tags.language('en')) {
      return 'Invalid language tag';
    }
    return this.appService.getHello();
  }
}
