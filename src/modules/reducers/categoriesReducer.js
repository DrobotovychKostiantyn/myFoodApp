import types from '../actionTypes';

const categoriesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.FETCH_SUCCESS_CATEGORIES:
      return payload.categories;
    default:
      return state;
  }
};

export default categoriesReducer;
