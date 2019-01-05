import { combineReducers } from 'redux';
import products from './reducer_fetch_products';
import cart from './reducer_toggle_product';
import { currentRouter, currentFilter } from './reducer_set_attributes';

const rootReducer = combineReducers({
  products,
  currentRouter,
  currentFilter,
  cart,
});

export default rootReducer;
