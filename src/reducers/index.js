import { combineReducers } from 'redux';
import products from './reducer_fetch_products';

const rootReducer = combineReducers({ products });

export default rootReducer;
