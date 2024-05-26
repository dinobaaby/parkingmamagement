import { TICKET_API } from "../../config/ApiUrl";
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

import axios from "axios";

export const getTicketRequset = () => {
    return {
        type: GET_ALL_TICKET_REQUEST,
    };
};

export const getTicketSuccess = (data) => {
    return {
        type: GET_ALL_TICKET_SUCCESS,
        payload: data,
    };
};
export const getTicketFailure = (error) => {
    return {
        type: GET_ALL_TICKET_FAILURE,
        payload: error,
    };
};

export const getTickets = (pageIndex, pageSize) => {
    return async (dispatch, getState) => {
        dispatch(getTicketRequset());
        try {
            const res = await axios.get(TICKET_API.GETALL, {
                params: {
                    pageIndex: pageIndex,
                    pageSize: pageSize,
                },
            });

            console.log(res);
            if (res.isSuccess) {
                dispatch(getTicketSuccess(res.data));
            }
            dispatch(getTicketFailure(res.data));
        } catch (error) {
            dispatch(getTicketFailure(error));
        }
    };
};
