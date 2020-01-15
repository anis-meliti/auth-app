import axios from 'axios';
import { REGISTER_FAIL, REGISTER_SUCCESS } from '../constants/actions-types';

export const register = credentials => async dispatch => {
  try {
    const regResult = await axios.post('/register', credentials);
    regResult.status === 200
      ? dispatch({
          type: REGISTER_SUCCESS,
          payload: regResult.data
        })
      : dispatch({
          type: REGISTER_FAIL
        });
  } catch (error) {
    console.error(error);
  }
};
