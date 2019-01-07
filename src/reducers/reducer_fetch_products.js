import { FETCH_PRODUCTS } from '../actions';

/**
 * It takes an object property and a list to get a new unique list of
 * the value of the given property
 *
 * @param {array}   items  The list where we need to extract property from
 * @param {property}  Object.key  The property that should be extracted
 * @return {array} unique list with mapped property
 */

function getUniqueList(items, property) {
  return [...new Set(items.map(item => item.properties[property]))];
}

/**
 * It reduces the data received from endpoint and flattens to be easily accessible
 */
function processData(payload) {
  const {
    metadata: { title, router, filter, cluster, descriptor },
    items,
  } = payload.data;
  return {
    isFetching: false,
    title,
    cluster,
    items,
    router,
    filter,
    descriptor,
    routerList: getUniqueList(items, router),
    filterList: getUniqueList(items, filter),
  };
}

/**
 * Reducer function to map redux action and returns new state
 * It's used for fetching products
 */
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
      newState = processData(action.payload);
      break;
    case FETCH_PRODUCTS.PENDING:
      newState = { isFetching: true };
      break;
    case FETCH_PRODUCTS.REJECTED:
      newState = { isFetching: false };
      break;
    default:
      newState = state;
  }

  return newState;
}
