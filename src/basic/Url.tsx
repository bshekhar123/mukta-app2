import {BASE_URL} from './util/Config';

export default class URL {
  constructor() {}
  static base_url = BASE_URL;
  
  static country_all() {
    return this.base_url + '/api/o/country/all';
  }
  
  static city_all(country: any) {
    return this.base_url + `/api/o/country/${country}/city/list`;
  }

}
