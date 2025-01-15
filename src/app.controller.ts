import { Controller, Get } from '@nestjs/common';
import tags from 'language-tags';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  getHello(): string {
    if (!tags.language('en')) {
      return 'Invalid language tag';
    }
    return 'Hello World!';
  }
}
