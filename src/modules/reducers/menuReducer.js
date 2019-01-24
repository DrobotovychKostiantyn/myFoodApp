import types from '../actionTypes';

const menuReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.FETCH_SUCCESS_MENU:
      return payload.menu;
    default:
      return state;
  }
};

export default menuReducer;
