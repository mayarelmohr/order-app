import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api-stg.bulkwhiz.com/sub_categories/Soda/skus',
  method: 'get',
  headers: {
    'content-type': 'application/json',
  },
});

/**
 * Api class is used to handle all network requests
 */
export default class Api {
  /**
   * Api Method used to fetch data for subcategories
   * It updates the axios instance if it receives url as a paramater to support using dynamic api link
   * It fires a GET request to get all data
   * @param {url} string  Optional Params to add dynamic link
   * @return {Number}  Total sum of item prices
   */
  static getProducts(url) {
    if (url) {
      axiosInstance.defaults.baseURL = url;
    }
    return axiosInstance.get();
  }
}
