import { REGISTER_SUCCESS, REGISTER_FAIL } from '../constants/actions-types';

const rootReducer = (state, { type, payload }) => {
  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        register: 'sucess',
        data: payload
      };
    case REGISTER_FAIL:
      return {
        ...state,
        register: 'fail'
      };
    default:
      return state;
  }
};

export default rootReducer;
