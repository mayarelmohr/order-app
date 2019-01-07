/**
 * It adds product to cart
 * @param {state} array array for products in cart
 * @param {product} object product to be added
 * @return {array}  final cart list
 */

function addProductToCart(state, product) {
  return [...state, product];
}

/**
 * It removes product from cart
 * @param {state} array array for products in cart
 * @param {product} object product to be removes
 * @return {array}  final cart list
 */
function removeProductFromCart(state, product) {
  return state.filter(item => product.id !== item.id);
}

/**
 * Reducer function to map redux action and returns new state
 * It either adds, removes or clear cart
 */

export default function(state = [], action) {
  if (action.type === 'ADD_PRODUCT') {
    return addProductToCart(state, action.payload);
  }
  if (action.type === 'REMOVE_PRODUCT') {
    return removeProductFromCart(state, action.payload);
  }
  if (action.type === 'CLEAR_PRODUCT') {
    return [];
  }
  return state;
}
