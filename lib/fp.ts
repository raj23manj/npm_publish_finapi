
import { Api } from './api';
import { BankAccountService } from './bank_account/bank_account.service';

interface InitParamsObject {
  token?: string,
  hostUrl: string,
  headers?: { [key: string]: string }
}

export class Fp {

  private api: Api;

  constructor(options: InitParamsObject) {

    if (options.hostUrl === undefined) {
      throw Error('missing configuration paramters (hostUrl)!!!');
    }

    //initialize API object
    this.api =  new Api({
      hostUrl: options.hostUrl,
      token: options.token,
      headers: options.headers,
    });
  }

  // FP V2 Apis from https://fintechprimitives.com/docs/api
  public bank_accounts() {
    return new BankAccountService(this.api);
  }
}

export const fp = Fp;
