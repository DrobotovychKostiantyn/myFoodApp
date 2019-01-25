import { combineReducers } from 'redux';
import categoriesReducer from './categoriesReducer';
import categoryReducer from './categoryReducer';
import menuReducer from './menuReducer';
import loadingReducer from './loadingReducer';
import filterMenuReducer from './filterMenuReducer';
import errorReducer from './errorReducer';
import cartReducer from './cartReducer/index';
import entities from './entitiesReducer';

export default combineReducers({
  menu: menuReducer,
  entities,
  categories: categoriesReducer,
  category: categoryReducer,
  cart: cartReducer,
  filter: filterMenuReducer,
  loading: loadingReducer,
  error: errorReducer,
});
