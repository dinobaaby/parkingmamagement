import {
    GET_ALL_TICKET_REQUEST,
    GET_ALL_TICKET_SUCCESS,
    GET_ALL_TICKET_FAILURE,
    CREATE_TICKET_REQUEST,
    CREATE_TICKET_SUCCESS,
    CREATE_TICKET_FAILURE,
    UPDATE_TICKET_REQUEST,
    UPDATE_TICKET_SUCCESS,
    UPDATE_TICKET_FAILURE,
    DELETE_TICKET_SUCCESS,
    DELETE_TICKET_REQUEST,
    DELETE_TICKET_FAILURE,
    CHECKIN_TICKET_REQUEST,
    CHECKIN_TICKET_SUCCESS,
    CHECKIN_TICKET_FAILURE,
    CHECKOUT_TICKET_REQUEST,
    CHECKOUT_TICKET_SUCCESS,
    CHECKOUT_TICKET_FAILURE,
    GET_TICKET_BY_PLATE_NUMBER_REQUEST,
    GET_TICKET_BY_PLATE_NUMBER_SUCCESS,
    GET_TICKET_BY_PLATE_NUMBER_FAILURE,
    GET_TICKET_BY_ID_REQUEST,
    GET_TICKET_BY_ID_SUCCESS,
    GET_TICKET_BY_ID_FAILURE,
} from "./ticketType";

const INITIAL_STATE = {
    data: {
        result: [],
        isSuccess: false,
        message: "",
    },
    ticketData: {},
    loading: false,
    error: false,
    deleting: false,
    success: false,
    bill: {},
};

const ticketReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ALL_TICKET_REQUEST:
            console.log("GET_ALL_TICKET_REQUEST");
            return {
                ...state,
                loading: true,
                error: false,
            };
        case GET_ALL_TICKET_SUCCESS:
            console.log("GET_ALL_TICKET_SUCCESS");
            return {
                ...state,
                loading: false,
                error: false,
                data: action.payload,
            };
        case GET_ALL_TICKET_FAILURE:
            console.log("GET_ALL_TICKET_FAILURE");
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: true,
            };
        case CHECKIN_TICKET_REQUEST:
            console.log("CHECKIN_TICKET_REQUEST");
            return {
                ...state,
                loading: true,
                error: false,
                success: false,
            };
        case CHECKIN_TICKET_SUCCESS:
            console.log("CHECKIN_TICKET_SUCCESS");
            return {
                ...state,
                loading: false,
                error: false,
                ticketData: action.payload,
                success: true,
            };
        case CHECKIN_TICKET_FAILURE:
            console.log("CHECKIN_TICKET_FAILURE");
            return {
                ...state,
                ticketData: action.payload,
                loading: false,
                error: true,
                success: false,
            };
        case UPDATE_TICKET_REQUEST:
            console.log("UPDATE_TICKET_REQUEST");
            return {
                ...state,
                loading: true,
                error: false,
                success: false,
            };
        case UPDATE_TICKET_SUCCESS:
            console.log("UPDATE_TICKET_SUCCESS");
            return {
                ...state,
                loading: false,
                error: false,
                success: true,
                ticketData: action.payload,
            };
        case UPDATE_TICKET_FAILURE:
            console.log("UPDATE_TICKET_FAILURE");
            return {
                ...state,
                ticketData: action.payload,
                loading: false,
                error: true,
                success: false,
            };

        case DELETE_TICKET_REQUEST:
            console.log("DELETE_TICKET_REQUEST");
            return {
                ...state,
                deleting: true,
                error: false,
            };
        case DELETE_TICKET_SUCCESS:
            console.log("DELETE_TICKET_SUCCESS");
            return {
                ...state,
                deleting: true,
                error: false,
            };
        case DELETE_TICKET_FAILURE:
            console.log("DELETE_TICKET_FAILURE");
            return {
                ...state,
                deleting: false,
                error: true,
            };
        case CHECKOUT_TICKET_REQUEST:
            console.log("CHECKOUT_TICKET_REQUEST");
            return {
                ...state,
                loading: true,
                error: false,
                success: false,
            };
        case CHECKOUT_TICKET_SUCCESS:
            console.log("CHECKOUT_TICKET_SUCCESS");
            return {
                ...state,
                loading: false,
                error: false,
                bill: action.payload,
                success: true,
            };
        case CHECKOUT_TICKET_FAILURE:
            console.log("CHECKOUT_TICKET_FAILURE");
            return {
                ...state,
                bill: action.payload,
                loading: false,
                error: true,
                success: false,
            };
        case GET_TICKET_BY_PLATE_NUMBER_REQUEST:
            console.log("GET_TICKET_BY_PLATE_NUMBER_REQUEST");
            return {
                ...state,
                loading: true,
                error: false,
            };
        case GET_TICKET_BY_PLATE_NUMBER_SUCCESS:
            console.log("GET_TICKET_BY_PLATE_NUMBER_SUCCESS");
            return {
                ...state,
                loading: false,
                error: false,
                data: action.payload,
            };
        case GET_TICKET_BY_PLATE_NUMBER_FAILURE:
            console.log("GET_TICKET_BY_PLATE_NUMBER_FAILURE");
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: true,
            };
        case GET_TICKET_BY_ID_REQUEST:
            console.log("GET_TICKET_BY_ID_REQUEST");
            return {
                ...state,
                loading: true,
                error: false,
            };
        case GET_TICKET_BY_ID_SUCCESS:
            console.log("GET_TICKET_BY_ID_SUCCESS");
            return {
                ...state,
                loading: false,
                error: false,
                ticketData: action.payload,
            };
        case GET_TICKET_BY_ID_FAILURE:
            console.log("GET_TICKET_BY_ID_FAILURE");
            return {
                ...state,
                ticketData: action.payload,
                loading: false,
                error: true,
            };
        default:
            return state;
    }
};

export default ticketReducer;
