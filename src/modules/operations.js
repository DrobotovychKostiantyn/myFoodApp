import axios from 'axios';
import * as actions from './actions';

export const fetchSuccessMenu = () => async dispatch => {
  dispatch(actions.fetchRequest());

  try {
    const response = await axios.get('http://localhost:3001/menu');
    dispatch(actions.fetchSuccessMenu(response.data));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

export const fetchSuccessCategories = () => async dispatch => {
  dispatch(actions.fetchRequest());

  try {
    const response = await axios.get('http://localhost:3001/categories');
    dispatch(actions.fetchSuccessCategories(response.data));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};
