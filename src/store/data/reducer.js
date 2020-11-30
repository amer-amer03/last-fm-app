import {
  FETCH_DATA_PENDING,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
} from "./consts";

const initialState = {
  data: {},
  isPending: false,
  errorMessage: "",
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_PENDING: {
      return {
        ...state,
        isPending: true,
      };
    }
    case FETCH_DATA_SUCCESS: {
      return {
        ...state,
        isPending: true,
        data: action.payload,
      };
    }
    case FETCH_DATA_ERROR: {
      return {
        ...state,
        isPending: false,
        errorMessage: action.payload,
      };
    }
    default:
      return state;
  }
};

export default dataReducer;
