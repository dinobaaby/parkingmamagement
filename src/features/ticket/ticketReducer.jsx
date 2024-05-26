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
} from "./ticketType";

const INITIAL_STATE = {
    data: {
        result: [],
        isSuccess: false,
        message: "",
    },
    loading: false,
    error: false,
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

        default:
            return state;
    }
};

export default ticketReducer;
