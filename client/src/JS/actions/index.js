import axios from 'axios';
import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS
} from '../constants/actions-types';

export const register = credentials => async dispatch => {
  try {
    const regResult = await axios.post('/register', credentials);

    regResult.status === 200 &&
      dispatch({
        type: REGISTER_SUCCESS,
        payload: regResult.data
      });
  } catch (errors) {
    console.log('TCL: error', errors.response);
    dispatch({
      type: REGISTER_FAIL,
      payload: errors.response.data.msg
    });
  }
};

export const loginUser = credentials => async dispatch => {
  try {
    const loginRes = await axios.post('/login', credentials);
    loginRes.status === 200 &&
      dispatch({
        type: LOGIN_SUCCESS,
        payload: loginRes.data
      });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.errors
    });
  }
};
