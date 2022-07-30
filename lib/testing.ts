// Fp Api's testing

import { fp } from "./fp";

const options =
{
  hostUrl: 'https://s.finprim.com/',
  token: '',
};

//###################################################################//
// Bank Account Service

async function getBankAccounts() {
  const fpc = new fp(options);
  try{
    const data = await fpc.bank_accounts().fetch('bac_666929e99b7b4c9c94d4f838990eef89');
    console.log(data);
  } catch (e: any) {
    console.log('error', e);
  }
}

async function getAllBankAccounts() {
  const fpc = new fp(options);
  try{
    const data = await fpc.bank_accounts().fetchAll({ investor: '677' });
    console.log(data);
  } catch (e: any) {
    console.log('error', e);
  }
}

async function createBankAccount() {
  const fpc = new fp(options);
  try{
    const params = {
                    investor: '669',
                    account_holder_name: 'Suvarna  space',
                    account_number: '05411000061135',
                    type: 'savings',
                    ifsc_code: 'HDFC0000501',
                  };
    const data = await fpc.bank_accounts().create(params);
    console.log(data);
  } catch (e: any) {
    console.log('error', e);
  }
}


// Bank Account invocations:

// getBankAccounts();
// getAllBankAccounts();
// createBankAccount();

