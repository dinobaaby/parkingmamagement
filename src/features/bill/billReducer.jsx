import {
  GET_ALL_BILL_REQUEST,
  GET_ALL_BILL_SUCCESS,
  GET_ALL_BILL_FAILURE,
  CREATE_BILL_REQUEST,
  CREATE_BILL_SUCCESS,
  CREATE_BILL_FAILURE,
  UPDATE_BILL_REQUEST,
  UPDATE_BILL_SUCCESS,
  UPDATE_BILL_FAILURE,
  DELETE_BILL_REQUEST,
  DELETE_BILL_SUCCESS,
  DELETE_BILL_FAILURE,
  GET_BILL_BY_ID_REQUEST,
  GET_BILL_BY_ID_SUCCESS,
  GET_BILL_BY_ID_FAILURE,
  GET_BILL_BY_PLATENUMBER_REQUEST,
  GET_BILL_BY_PLATENUMBER_SUCCESS,
  GET_BILL_BY_PLATENUMBER_FAILURE,
} from "./billType";

const INITIAL_STATE = {
    data: {
        result: [],
        isSuccess: false,
        message: ""
    },
    bill: {},
    loading: false,
    error: false
}

export const billReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ALL_BILL_REQUEST:
            console.log("GET_ALL_BILL_REQUEST");
            return {
                ...state,
                loading: true,
                error: false
            }
        case GET_ALL_BILL_SUCCESS:
            console.log("GET_ALL_BILL_SUCCESS");
            return {
                ...state,
                loading: false,
                error: false,
                data: action.payload
            }
        case GET_ALL_BILL_FAILURE:
            console.log("GET_ALL_BILL_FAILURE");
            return {
                ...state,
                loading: false,
                error: true,
                data: action.payload
            }
        case CREATE_BILL_REQUEST:
            console.log("CREATE_BILL_REQUEST");
            return {
                ...state,
                loading: true,
                error: false
            }
        case CREATE_BILL_SUCCESS:
            console.log("CREATE_BILL_SUCCESS");
            return {
                ...state,
                loading: false,
                error: false
            }
        case CREATE_BILL_FAILURE:
            console.log("CREATE_BILL_FAILURE");
            return {
                ...state,
                loading: false,
                error: true
            }
        case UPDATE_BILL_REQUEST:
            console.log("UPDATE_BILL_REQUEST");
            return {
                ...state,
                loading: true,
                error: false
            }
        case UPDATE_BILL_SUCCESS:
            console.log("UPDATE_BILL_SUCCESS");
            return {
                ...state,
                loading: false,
                error: false,
                bill: action.payload
            }
        case UPDATE_BILL_FAILURE:
            console.log("UPDATE_BILL_FAILURE");
            return {
                ...state,
                loading: false,
                error: true,
                bill: action.payload
            }
        case DELETE_BILL_REQUEST:
            console.log("DELETE_BILL_REQUEST");
            return {
                ...state,
                loading: true,
                error: false
            }
        case DELETE_BILL_SUCCESS:
            console.log("DELETE_BILL_SUCCESS");
            return {
                ...state,
                loading: false,
                error: false,
            }
        case DELETE_BILL_FAILURE:
            console.log("DELETE_BILL_FAILURE");
            return {
                ...state,
                loading: false,
                error: true,
            }
        case GET_BILL_BY_ID_REQUEST:
            console.log("GET_BILL_BY_ID_REQUEST");
            return {
                ...state,
                loading: true,
                error: false
            }
        case GET_BILL_BY_ID_SUCCESS:
            console.log("GET_BILL_BY_ID_SUCCESS");
            return {
                ...state,
                loading: false,
                error: false,
                bill: action.payload
            }
        case GET_BILL_BY_ID_FAILURE:
            console.log("GET_BILL_BY_ID_FAILURE");
            return {
                ...state,
                loading: false,
                error: true,
                bill: action.payload
            }
        case GET_BILL_BY_PLATENUMBER_REQUEST:
            console.log("GET_BILL_BY_PLATENUMBER_REQUEST");
            return {
                ...state,
                loading: true,
                error: false,
            }
        case GET_BILL_BY_PLATENUMBER_SUCCESS:
            console.log("GET_BILL_BY_PLATENUMBER_SUCCESS");
            return {
                ...state,
                loading: false,
                error: false,
                bill: action.payload
            }
        case GET_BILL_BY_PLATENUMBER_FAILURE:
            console.log("GET_BILL_BY_PLATENUMBER_FAILURE");
            return {
                ...state,
                loading: false,
                error: true,
                bill: action.payload
            }
        default:
            return state;
    }
}