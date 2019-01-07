/**
 * Reducer function to map redux action and returns new state
 * It sets the current selected router variable to global state to be accessed by selector
 */
export function currentRouter(state = {}, action) {
  if (action.type === 'SET_ROUTER') {
    return action.payload;
  }
  return state;
}
/**
 * Reducer function to map redux action and returns new state
 * It sets the current selected filter variable to global state to be accessed by selector
 */
export function currentFilter(state = {}, action) {
  if (action.type === 'SET_FILTER') {
    return action.payload;
  }
  return state;
}
