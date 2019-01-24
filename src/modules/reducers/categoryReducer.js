import types from '../actionTypes';

const categoryReducer = (state = '', { type, payload }) => {
  switch (type) {
    case types.CATEGORY:
      return payload.category;

    case types.CLEAR_CATEGORY_SELECTOR:
      return '';

    default:
      return state;
  }
};

export default categoryReducer;
