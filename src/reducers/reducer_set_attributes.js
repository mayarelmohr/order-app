export default function(state = {}, action) {
  if (action.type === 'SET_ROUTER') {
    return action.payload;
  }
  return state;
}

export function currentFilter(state = {}, action) {
  if (action.type === 'SET_FILTER') {
    return action.payload;
  }
  return state;
}
