import Api from '../utils/api';

export const FETCH_PRODUCTS = {
  ROOT: 'FETCH_PRODUCTS',
  PENDING: 'FETCH_PRODUCTS_PENDING',
  REJECTED: 'FETCH_PRODUCTS_REJECTED',
  FULFILLED: 'FETCH_PRODUCTS_FULFILLED',
};

export function fetchProducts(url) {
  return { type: FETCH_PRODUCTS.ROOT, payload: Api.getProducts(url) };
}
