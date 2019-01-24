import types from '../actionTypes';

const filterMenuReducer = (state = '', { type, payload }) => {
  switch (type) {
    case types.FILTER_MENU:
      return payload.filter;
    default:
      return state;
  }
};

export default filterMenuReducer;
