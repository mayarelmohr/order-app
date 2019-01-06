export function addProduct(item) {
  return { type: 'ADD_PRODUCT', payload: item };
}

export function removeProduct(item) {
  return { type: 'REMOVE_PRODUCT', payload: item };
}
export function clearProduct() {
  return { type: 'CLEAR_PRODUCT', payload: [] };
}
