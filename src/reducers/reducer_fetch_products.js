import { FETCH_PRODUCTS } from '../actions';

function processData(payload) {
  const {
    metadata: { title, router, filter, cluster },
    items,
  } = payload.data;
  return {
    isFetching: false,
    title,
    cluster,
    items,
    router,
    filter,
    routerList: getUniqueList(items, router),
    filterList: getUniqueList(items, filter),
  };
}
function getUniqueList(items, property) {
  return [
    ...new Set(
      items.map(item => {
        return item.properties[property];
      })
    ),
  ];
}

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
    case FETCH_PRODUCTS.REJECTED:
      newState = { isFetching: false };
      break;
    default:
      newState = state;
  }

  return newState;
}
