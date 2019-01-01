import { FETCH_PRODUCTS } from '../actions';

export default function(
  state = {
    isFetching: true,
  },
  action
) {
  let newState;
  switch (action.type) {
    case FETCH_PRODUCTS.ROOT:
    case FETCH_PRODUCTS.FULFILLED:
      newState = { isFetching: false, ...action.payload };
      break;
    case FETCH_PRODUCTS.REJECTED:
      newState = { isFetching: false };
      break;
    default:
      newState = state;
  }

  return newState;
}
