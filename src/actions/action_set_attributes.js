export function setRouter(attribute) {
  return { type: 'SET_ROUTER', payload: attribute };
}

export function setFilter(attribute) {
  return { type: 'SET_FILTER', payload: attribute };
}
