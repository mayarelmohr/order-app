import { combineReducers } from 'redux';
import products from './reducer_fetch_products';
import currentRouter, { currentFilter } from './reducer_set_attributes';

const rootReducer = combineReducers({
  products,
  currentRouter,
  currentFilter,
});

export default rootReducer;
