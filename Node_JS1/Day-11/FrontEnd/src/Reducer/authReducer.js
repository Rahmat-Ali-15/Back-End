import * as types from "../Actions/action";

const initialValue = {
  isAuth: false,
  isError: false,
  isLoading: false,
  userData: []
};

export const authReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case types.GET_LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }

    case types.GET_LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isAuth: true,
      };
    }
    case types.GET_LOGIN_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    default:
        return state
  }
};
