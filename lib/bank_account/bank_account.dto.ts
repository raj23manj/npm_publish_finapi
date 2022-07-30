export namespace BankAccount {

  export const url = '/v2/bank_accounts';

  export interface BankAccountFetchAllRequest {
    investor: string | null;
  }

  export interface BankAccountCreateRequest {
    investor: string,
    account_holder_name: string,
    account_number: string,
    type: string,
    ifsc_code: string,
  }

  export interface BankAccountCreateResponse {
    id: string,
    object: string,
    investor: string,
    account_holder_name: string,
    account_number: string,
    type: string,
    ifsc_code: string,
    created_at: string,
    updated_at: string,
    cancelled_cheque: string | null,
  }
}
