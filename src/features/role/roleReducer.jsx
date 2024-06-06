import {
  GET_ALL_ROLE_REQUEST,
  GET_ALL_ROLE_SUCCESS,
  GET_ALL_ROLE_FAILURE,
  CREATE_ROLE_REQUEST,
  CREATE_ROLE_SUCCESS,
  CREATE_ROLE_FAILURE,
  UPDATE_ROLE_REQUEST,
  UPDATE_ROLE_SUCCESS,
  UPDATE_ROLE_FAILURE,
  DELETE_ROLE_REQUEST,
  DELETE_ROLE_SUCCESS,
  DELETE_ROLE_FAILURE,
} from "./roleType";

const INITIAL_STATE = {
  data: {
    result: [],
    isSuccess: false,
    message: "",
  },
  role: {},
  loading: false,
  error: false,
};

export const roleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_ROLE_REQUEST:
      console.log("GET_ALL_ROLE_REQUEST");
      return {
        ...state,
        loading: true,
        error: false,
      };
    case GET_ALL_ROLE_SUCCESS:
      console.log("GET_ALL_ROLE_SUCCESS");
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      };
    case GET_ALL_ROLE_FAILURE:
      console.log("GET_ALL_ROLE_FAILURE");
      return {
        ...state,
        loading: false,
        error: true,
        data: action.payload,
      };
    case CREATE_ROLE_REQUEST:
      console.log("CREATE_ROLE_REQUEST");
      return {
        ...state,
        loading: true,
        error: false
      };
    case CREATE_ROLE_SUCCESS:
      console.log("CREATE_ROLE_SUCCESS");
      return {
        ...state,
        loading: false,
        error: false
      }
    case CREATE_ROLE_FAILURE:
      console.log("CREATE_ROLE_FAILURE");
      return {
        ...state,
        loading: false,
        error: true
      }
    case UPDATE_ROLE_REQUEST:
      console.log("UPDATE_ROLE_REQUEST");
      return {
        ...state,
        loading: true,
        error: false
      }
    case UPDATE_ROLE_SUCCESS:
      console.log("UPDATE_ROLE_SUCCESS");
      return {
        ...state,
        loading: false,
        error: false,
        role: action.payload
      }
    case UPDATE_ROLE_FAILURE:
      console.log("UPDATE_ROLE_FAILURE");
      return {
        ...state,
        loading: false,
        error: true,
        role: action.payload
      }
    case DELETE_ROLE_REQUEST:
      console.log("DELETE_ROLE_REQUEST");
      return {
        ...state,
        loading: true,
        error: false
      }
    case DELETE_ROLE_SUCCESS:
      console.log("DELETE_ROLE_SUCCESS");
      return {
        ...state,
        loading: false,
        error: false
      }
    case DELETE_ROLE_FAILURE:
      console.log("DELETE_ROLE_FAILURE");
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};
