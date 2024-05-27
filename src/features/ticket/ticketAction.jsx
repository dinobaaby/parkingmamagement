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

export const checkOutTicketRequest = () => {
    return {
        type: CHECKOUT_TICKET_REQUEST,
    };
};

export const checkOutTicketSuccess = (data) => {
    return {
        type: CHECKOUT_TICKET_SUCCESS,
        payload: data,
    };
};

export const checkOutTicketFailure = (error) => {
    return {
        type: CHECKOUT_TICKET_FAILURE,
        payload: error,
    };
};

export const checkOutTicket = ({ id, plNumber, img }) => {
    return async (dispatch, getState) => {
        dispatch(checkOutTicketRequest());
        try {
            const res = await axios.patch(`${TICKET_API.CHECKOUT}${id}`, {
                plateNumber: plNumber,
                imageUrl: img,
            });
            console.log(res);
            if (res.data.isSuccess) {
                dispatch(checkOutTicketSuccess(res.data));
                dispatch(getTickets(1, 10));
            } else {
                dispatch(checkOutTicketFailure(res.data));
            }
        } catch (error) {
            dispatch(checkOutTicketFailure(error.response.data.error));
        }
    };
};

export const getTicketByPlateNumberRequest = () => {
    return {
        type: GET_TICKET_BY_PLATE_NUMBER_REQUEST,
    };
};

export const getTicketByPlateNumberSuccess = (data) => {
    return {
        type: GET_TICKET_BY_PLATE_NUMBER_SUCCESS,
        payload: data,
    };
};
export const getTicketByPlateNumberFailure = (error) => {
    return {
        type: GET_TICKET_BY_PLATE_NUMBER_FAILURE,
        payload: error,
    };
};

export const getTicketByPlateNumber = ({ plateNumber }) => {
    return async (dispatch, getState) => {
        dispatch(getTicketByPlateNumberRequest());
        try {
            const res = await axios.get(
                `${TICKET_API.GETPLATEBYPLATE}${plateNumber}`
            );
            console.log(res);
            if (res.data.isSuccess) {
                dispatch(getTicketByPlateNumberSuccess(res.data));
            } else {
                dispatch(getTicketByPlateNumberFailure(res.data));
            }
        } catch (error) {
            dispatch(getTicketByPlateNumberFailure(error));
        }
    };
};

export const getTicketByIdRequest = () => {
    return {
        type: GET_TICKET_BY_ID_REQUEST,
    };
};
export const getTicketByIdSuccess = (data) => {
    return {
        type: GET_TICKET_BY_ID_SUCCESS,
        payload: data,
    };
};

export const getTicketByIdFailure = (error) => {
    return {
        type: GET_TICKET_BY_ID_FAILURE,
        payload: error,
    };
};

export const getTicketById = ({ id }) => {
    return async (dispatch, getState) => {
        dispatch(getTicketByIdRequest());
        try {
            const res = await axios.get(`${TICKET_API.GETBYID}${id}`);
            console.log(res);
            if (res.data.isSuccess) {
                dispatch(getTicketByIdSuccess(res.data));
            } else {
                dispatch(getTicketByIdFailure(res.data));
            }
        } catch (error) {
            dispatch(getTicketByIdFailure(error));
        }
    };
};
