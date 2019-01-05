export default function(state = [], action) {
  if (action.type === 'ADD_PRODUCT') {
    return addProductToCart(state, action.payload);
  }
  if (action.type === 'REMOVE_PRODUCT') {
    return removeProductFromCart(state, action.payload);
  }
  return state;
}

function addProductToCart(state, product) {
  return [...state, product];
}
function removeProductFromCart(state, product) {
  return state.filter(item => product.id !== item.id);
}
