import {
    GET_ALL_CUSTOMER_REQUEST,
    GET_ALL_CUSTOMER_SUCCESS,
    GET_ALL_CUSTOMER_FAILURE,
    CREATE_CUSTOMER_REQUEST,
    CREATE_CUSTOMER_SUCCESS,
    CREATE_CUSTOMER_FAILURE,
    UPDATE_CUSTOMER_REQUEST,
    UPDATE_CUSTOMER_SUCCESS,
    UPDATE_CUSTOMER_FAILURE,
    DELETE_CUSTOMER_REQUEST,
    DELETE_CUSTOMER_FAILURE,
    DELETE_CUSTOMER_SUCCESS,
    GET_CUSTOMER_BY_ID_REQUEST,
    GET_CUSTOMER_BY_ID_SUCCESS,
    GET_CUSTOMER_BY_ID_FAILURE,
    GET_CUSTOMER_NAME_REQUEST,
    GET_CUSTOMER_NAME_SUCCESS,
    GET_CUSTOMER_NAME_FAILURE,
    GET_CUSTOMER_PHONE_REQUEST,
    GET_CUSTOMER_PHONE_SUCCESS,
    GET_CUSTOMER_PHONE_FAILURE,
} from "./customerType";

const initialState = {
    customers: [],
    loading: false,
    error: "",
    customer: {},
};

export const customerReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_CUSTOMER_REQUEST:
        case CREATE_CUSTOMER_REQUEST:
        case UPDATE_CUSTOMER_REQUEST:
        case DELETE_CUSTOMER_REQUEST:
        case GET_CUSTOMER_BY_ID_REQUEST:
        case GET_CUSTOMER_NAME_REQUEST:
        case GET_CUSTOMER_PHONE_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_ALL_CUSTOMER_SUCCESS:
        case GET_CUSTOMER_NAME_SUCCESS:
        case GET_CUSTOMER_PHONE_SUCCESS:
            return {
                ...state,
                loading: false,
                customers: action.payload,
                error: "",
            };
        case GET_ALL_CUSTOMER_FAILURE:
        case CREATE_CUSTOMER_FAILURE:
        case UPDATE_CUSTOMER_FAILURE:
        case DELETE_CUSTOMER_FAILURE:
        case GET_CUSTOMER_BY_ID_FAILURE:
        case GET_CUSTOMER_NAME_FAILURE:
        case GET_CUSTOMER_PHONE_FAILURE:
            return {
                ...state,
                loading: false,
                customers: [],
                error: action.payload,
            };
        case CREATE_CUSTOMER_SUCCESS:
        case UPDATE_CUSTOMER_SUCCESS:
        case DELETE_CUSTOMER_SUCCESS:
        case GET_CUSTOMER_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                customer: action.payload,
                error: "",
            };
        default:
            return state;
    }
};
