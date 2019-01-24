import types from './actionTypes';

export const fetchRequest = () => ({
  type: types.FETCH_REQUEST,
});

export const fetchSuccessMenu = menu => ({
  type: types.FETCH_SUCCESS_MENU,
  payload: {
    menu,
  },
});

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
