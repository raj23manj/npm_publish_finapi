import { Api } from '../api';
import { BankAccount } from '../bank_account/bank_account.dto';
import { CommonDtos } from '../common/common_dto';

export class BankAccountService {
  private api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  /**
   * Create a bank account
   * @param data CreateBankAccountRequest object
   * @returns CreateBankAccountResponse
  **/
  create(data: BankAccount.BankAccountCreateRequest): Promise<BankAccount.BankAccountCreateResponse> {
    return this.api.post(BankAccount.url, data);
  }

  /**
   * Fetch an Bank Account
   * @param id number
   * @returns BankAccountResponse
  **/
  fetch(id: string | number): Promise<BankAccount.BankAccountCreateResponse> {
    return this.api.get(`${BankAccount.url}/${id}`);
  }

  /**
   * Fetch all Bank Account
   * @returns BankAccountResponse list
  **/
  fetchAll(params: BankAccount.BankAccountFetchAllRequest): Promise<CommonDtos.ListResponse<BankAccount.BankAccountCreateResponse>> {
    return this.api.get(BankAccount.url, { params });
  }
}
