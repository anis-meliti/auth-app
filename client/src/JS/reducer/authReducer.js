import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from '../constants/actions-types';
const initialState = {
  isAuth: false,
  data: [],
  errors: null
};
const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        register: 'success',
        data: payload
      };
    case REGISTER_FAIL:
      return {
        ...state,
        register: 'fail',
        errors: payload
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        data: payload
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isAuth: false,
        errors: payload
      };
    default:
      return state;
  }
};
export default authReducer;
