import { Injectable } from '@nestjs/common';
import { I18nRequestScopeService } from 'nestjs-i18n';

@Injectable()
export class AppService {

  constructor(private readonly i18n: I18nRequestScopeService) {}

  async getHello() {
    let a = await this.i18n.translate('123');

    return a;
  }
}
