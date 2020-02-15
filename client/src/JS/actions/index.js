import axios from 'axios';
import { REGISTER_FAIL, REGISTER_SUCCESS } from '../constants/actions-types';

export const register = credentials => async dispatch => {
  try {
    const regResult = await axios.post('/register', credentials);
    console.log('TCL: regResult', regResult);
    // console.log('TCL: credentials', credentials);
    regResult.status === 200
      ? dispatch({
          type: REGISTER_SUCCESS,
          payload: regResult.data
        })
      : regResult.status === 400
      ? console.error(regResult)
      : dispatch({
          type: REGISTER_FAIL,
          payload: regResult
        });
  } catch (errors) {
    console.log('TCL: error', errors.response);
    dispatch({
      type: REGISTER_FAIL,
      payload: errors.response.data.msg
    });
  }
};
