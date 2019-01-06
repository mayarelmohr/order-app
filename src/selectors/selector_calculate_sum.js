import { createSelector } from 'reselect';

const getCart = state => state;

export default createSelector(
  [getCart],
  cart => {
    return cart.reduce((accumulator, item) => {
      return accumulator + Number(item.price);
    }, 0);
  }
);
