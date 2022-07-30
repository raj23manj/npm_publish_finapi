

export namespace ValidatorUtil {
  
  /**
   * Validate phone number. Only isd with value `91` is supportd. ex.9998765432
   * 
   * @param str phone number to be validated
   * @param isd Isd code for the phone number
   * @returns {@code boolean} based on the test
   */
  export function phoneNumber(str: string, isd = '91') {
    if (isd === '91') {
        return /^[6-9]\d{9}$/gi.test(str);
    }
    return false;
  }

  /**
   * Validate IFSC. Ex. IFSC0112233
   * 
   * @param str Ifsc to be validated
   * @returns {@code boolean} based on the test
   */
  
  export function ifsc(str: string) {
    return /^[A-Za-z]{4}0{1}[a-zA-Z0-9]{6}$/.test(str);
  }

  /**
   * Validate 12 digit aadhar number. ex. 3456 78911 2345
   * 
   * @param str Aadhar number to be validated with spaces after every 4th character.
   * @returns {@code boolean} based on the test
   */
  export function aadhar(str: string) {
    return /^[2-9]\d{3}\s{1}\d{4}\s{1}\d{4}$/.test(str);
  }

  /**
   * Validate bank account number.
   * 
   * @param str Bank Account number to be validated
   * @returns {@code boolean} based on the test
   */
  export function bankAccountNumber(str: string) {
    return /^\d{9,18}$/.test(str);
  }
}