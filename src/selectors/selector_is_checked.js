import { createSelector } from 'reselect';

const getProducts = state => state.cart;

const getId = (state, props) => props;

/**
 * Selector Function is used to map on state from reducer and memoize the result
 * It checks if the given element id is in the cart list
 * It's wrapper in a fuction to be called in mapStateToProps
 * To create different instance of the selector per object and also create different instances of mapState to Props
 * Since each selector has a cache size of 1
 * @param {transformFunctions}   Array  The transform functions
 * @param {cart}  Array     The list of products the user chose
 * @return {item} it returns if the item is present will return undefined if not
 */
const makeCheckItemsInCart = () =>
  createSelector(
    [getProducts, getId],
    (products, id) => {
      const item = products.find(item => item.id === id);
      return item;
    }
  );
export default makeCheckItemsInCart;
