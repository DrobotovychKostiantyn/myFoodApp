import { combineReducers } from 'redux';
import categoriesReducer from './reducers/categoriesReducer';
import categoryReducer from './reducers/categoryReducer';
import menuReducer from './reducers/menuReducer';
import loadingReducer from './reducers/loadingReducer';
import filterMenuReducer from './reducers/filterMenuReducer';
import errorReducer from './reducers/errorReducer';

export default combineReducers({
  menu: menuReducer,
  categories: categoriesReducer,
  category: categoryReducer,
  filter: filterMenuReducer,
  loading: loadingReducer,
  error: errorReducer,
});
