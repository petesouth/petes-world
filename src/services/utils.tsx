import { Guid } from "guid-typescript";


// Wrapper around axios. Since Axios sends different structured responses
// for error and success, we're sending our own json for both cases in the
// response.data property. This service can swallow the actual response object
// and send only the data we care about to the corresponding action.

class Utils {

  arrayToObject(array: Array<any>): Map<string,any> {
    let returnMap = new Map<string,any>();
    array.forEach((item)=>{
      returnMap.set("" + item.id, item);
    })
    return returnMap;
  }

  giveMeGuid(): string {
    return Guid.create().toString();
  }

  formatPhoneNumber(phoneNumberString: string): string | null {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
    var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/)
    if (match) {
      var intlCode = (match[1] ? '+1 ' : '')
      return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('')
    }
    return null
  }


}

const utils = new Utils();

export default utils;
