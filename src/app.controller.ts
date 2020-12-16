import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { I18nService } from 'nestjs-i18n';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly i18n: I18nService
  ) {}

  @Get()
  async getHello() {
    return await this.appService.getHello();
  }

  @Get('/test')
  async getTest() {
    return await this.i18n.translate('123');
  }
}
