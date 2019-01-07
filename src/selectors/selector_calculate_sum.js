import { createSelector } from 'reselect';

const getCart = state => state;
/**
 * Selector Function is used to map on state from reducer and memoize the result
 * It calculates the sum for list of products
 * @param {transformFunctions}   Array  The transform functions
 * @param {cart}  Array     The list of products the user chose
 * @param {currentFilter}  String     The current selected value for filter
 * @return {Number}  Total sum of item prices
 */

export default createSelector(
  [getCart],
  cart => cart.reduce((accumulator, item) => accumulator + Number(item.price), 0)
);
