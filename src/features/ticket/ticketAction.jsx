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
    CHECKIN_TICKET_REQUEST,
    CHECKIN_TICKET_SUCCESS,
    CHECKIN_TICKET_FAILURE,
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

            if (res.data.isSuccess) {
                dispatch(getTicketSuccess(res.data));
            } else {
                dispatch(getTicketFailure(res.data));
            }
        } catch (error) {
            dispatch(getTicketFailure(error));
        }
    };
};

export const checkInTicketRequest = () => {
    return {
        type: CHECKIN_TICKET_REQUEST,
    };
};

export const checkInTicketSuccess = (data) => {
    return {
        type: CHECKIN_TICKET_SUCCESS,
        payload: data,
    };
};
export const checkInTicketFailure = (error) => {
    return {
        type: CHECKIN_TICKET_FAILURE,
        payload: error,
    };
};

export const checkInTicket = ({ plateNumber, formdata }) => {
    return async (dispatch, getState) => {
        dispatch(checkInTicketRequest());
        try {
            const res = await axios.patch(TICKET_API.CHECKIN, formdata, {
                params: {
                    plateNumber: plateNumber,
                },
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            console.log(res);
            if (res.data.isSuccess) {
                dispatch(checkInTicketSuccess(res.data));
            } else {
                dispatch(checkInTicketFailure(res.data));
            }
        } catch (error) {
            dispatch(checkInTicketFailure(error));
        }
    };
};

export const deleteTicketRequest = () => {
    return {
        type: DELETE_TICKET_REQUEST,
    };
};

export const deleteTicketSuccess = (data) => {
    return {
        type: DELETE_TICKET_SUCCESS,
        payload: data,
    };
};
export const deleteTicketFailure = (error) => {
    return {
        type: DELETE_TICKET_FAILURE,
        payload: error,
    };
};
export const deleteTicket = ({ id }) => {
    return async (dispatch, getState) => {
        dispatch(deleteTicketRequest());
        try {
            const res = await axios.delete(`${TICKET_API.DELETE}/${id}`);
            console.log(res);

            if (res.data.isSuccess) {
                dispatch(deleteTicketSuccess(res.data));
                dispatch(getTickets(1, 10));
            } else {
                dispatch(deleteTicketFailure(res.data));
            }
        } catch (error) {
            dispatch(deleteTicketFailure(error));
        }
    };
};
