import { REGISTER_SUCCESS, REGISTER_FAIL } from '../constants/actions-types';
const initialState = {
  isAuth: false,
  data: [],
  errors: null
};
const authReducer = (state = initialState, { type, payload }) => {
  console.log('TCL: authReducer -> payload', payload);
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
    default:
      return state;
  }
};
export default authReducer;
