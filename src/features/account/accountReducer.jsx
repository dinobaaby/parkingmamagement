import {
    GET_ALL_ACCOUNT_REQUEST,
    GET_ALL_ACCOUNT_SUCCESS,
    GET_ALL_ACCOUNT_FAILURE,
    CREATE_ACCOUNT_REQUEST,
    CREATE_ACCOUNT_SUCCESS,
    CREATE_ACCOUNT_FAILURE,
    UPDATE_ACCOUNT_REQUEST,
    UPDATE_ACCOUNT_SUCCESS,
    UPDATE_ACCOUNT_FAILURE,
    DELETE_ACCOUNT_REQUEST,
    DELETE_ACCOUNT_SUCCESS,
    DELETE_ACCOUNT_FAILURE,
    GET_ACCOUNT_BY_NAME_REQUEST,
    GET_ACCOUNT_BY_NAME_SUCCESS,
    GET_ACCOUNT_BY_NAME_FAILURE
} from "./accountType"

const INITIAL_STATE = {
    data: {
        result: [],
        isSuccess: false,
        message: ""
    },
    account: {},
    loading: false,
    error: false
}

export const accountReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ALL_ACCOUNT_REQUEST:
            console.log("GET_ALL_ACCOUNT_REQUEST");
            return {
                ...state,
                loading: true,
                error: false
            }
        case GET_ALL_ACCOUNT_SUCCESS:
            console.log("GET_ALL_ACCOUNT_SUCCESS");
            return {
                ...state,
                loading: false,
                error: false,
                data: action.payload
            }
        case GET_ALL_ACCOUNT_FAILURE:
            console.log("GET_ALL_ACCOUNT_FAILURE");
            return {
                ...state,
                loading: false,
                error: true
            }
        case CREATE_ACCOUNT_REQUEST:
            console.log("CREATE_ACCOUNT_REQUEST");
            return {
                ...state,
                loading: true,
                error: false
            }
        case CREATE_ACCOUNT_SUCCESS:
            console.log("CREATE_ACCOUNT_SUCCESS");
            return {
                ...state,
                loading: false,
                error: false
            }
        case CREATE_ACCOUNT_FAILURE:
            console.log("CREATE_ACCOUNT_FAILURE");
            return {
                ...state,
                loading: false,
                error: true
            }
        case UPDATE_ACCOUNT_REQUEST:
            console.log("UPDATE_ACCOUNT_REQUEST");
            return {
                ...state,
                loading: false,
                error: false
            }
        case UPDATE_ACCOUNT_SUCCESS:
            console.log("UPDATE_ACCOUNT_SUCCESS");
            return {
                ...state,
                loading: false,
                error: false,
                account: action.payload
            }
        case UPDATE_ACCOUNT_FAILURE:
            console.log("UPDATE_ACCOUNT_FAILURE");
            return {
                ...state,
                loading: false,
                error: true,
                account: action.payload
            }
        case DELETE_ACCOUNT_REQUEST:
            console.log("DELETE_ACCOUNT_REQUEST");
            return {
                ...state,
                loading: true,
                error: false
            }
        case DELETE_ACCOUNT_SUCCESS:
            console.log("DELETE_ACCOUNT_SUCCESS");
            return {
                ...state,
                loading: false,
                error: false
            }
        case DELETE_ACCOUNT_FAILURE:
            console.log("DELETE_ACCOUNT_FAILURE");
            return {
                ...state,
                loading: false,
                error: true
            }
        case GET_ACCOUNT_BY_NAME_REQUEST:
            console.log("GET_ACCOUNT_BY_NAME_REQUEST");
            return {
                ...state,
                loading: true,
                error: false
            }
        case GET_ACCOUNT_BY_NAME_SUCCESS:
            console.log("GET_ACCOUNT_BY_NAME_SUCCESS");
            return {
                ...state,
                loading: false,
                error: false,
                account: action.payload
            }
        case GET_ACCOUNT_BY_NAME_FAILURE:
            console.log("GET_ACCOUNT_BY_NAME_FAILURE");
            return {
                ...state,
                loading: false,
                error: true,
                account: action.payload
            }
        default:
            return state;
    }

}