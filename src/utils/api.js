import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api-stg.bulkwhiz.com/sub_categories/Soda/skus',
  method: 'get',
  headers: {
    'content-type': 'application/json',
  },
});
export default class Api {
  static getProducts(url) {
    if (url) {
      axiosInstance.defaults.baseURL = url;
    }
    return axiosInstance.get();
  }
}
