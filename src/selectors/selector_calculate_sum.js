import { createSelector } from 'reselect';

const getCart = state => state;

export default createSelector(
  [getCart],
  cart => cart.reduce((accumulator, item) => accumulator + Number(item.price), 0)
);
