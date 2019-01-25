import { normalize } from 'normalizr';
import schema from '../schema/index';
import types from './actionTypes';

export const fetchRequest = () => ({
  type: types.FETCH_REQUEST,
});

export const fetchSuccessMenu = menu => {
  const normal = normalize(menu, [schema]);

  return {
    type: types.FETCH_SUCCESS_MENU,
    payload: {
      ids: {
        menu: Object.keys(normal.entities.menu),
      },
      entities: normal.entities,
    },
  };
};

export const fetchSuccessCategories = categories => ({
  type: types.FETCH_SUCCESS_CATEGORIES,
  payload: {
    categories,
  },
});

export const fetchError = error => ({
  type: types.FETCH_ERROR,
  payload: {
    error,
  },
});

export const focusCategory = category => ({
  type: types.CATEGORY,
  payload: {
    category,
  },
});

export const clearCategorySelector = () => ({
  type: types.CLEAR_CATEGORY_SELECTOR,
});

export const filterMenu = filter => ({
  type: types.FILTER_MENU,
  payload: {
    filter,
  },
});

export const addToCart = id => ({
  type: types.ADD_TO_CART,
  payload: {
    id,
  },
});

export const removeFromCart = id => ({
  type: types.REMOVE_FROM_CART,
  payload: {
    id,
  },
});

export const incrementAmount = id => ({
  type: types.INCREMENT_AMOUNT,
  payload: {
    id,
  },
});

export const decrementAmount = id => ({
  type: types.DECREMENT_AMOUNT,
  payload: {
    id,
  },
});
