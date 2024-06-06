import {
  GET_ALL_BILL_REQUEST,
  GET_ALL_BILL_SUCCESS,
  GET_ALL_BILL_FAILURE,
  CREATE_BILL_REQUEST,
  CREATE_BILL_SUCCESS,
  CREATE_BILL_FAILURE,
  // UPDATE_BILL_REQUEST,
  // UPDATE_BILL_SUCCESS,
  // UPDATE_BILL_FAILURE,
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
import { BILL_API } from "../../config/ApiUrl";
import axios from "axios";

// Get bill:

export const getBillRequest = () => {
  return {
    type: GET_ALL_BILL_REQUEST,
  };
};

export const getBillSuccess = (bills) => {
  return {
    type: GET_ALL_BILL_SUCCESS,
    payload: bills,
  };
};

export const getBillFailure = (error) => {
  return {
    type: GET_ALL_BILL_FAILURE,
    payload: error,
  };
};

export const getAllBill = (pageIndex, pageSize) => {
  return async (dispatch) => {
    dispatch(getBillRequest());
    try {
      const res = await axios.get(BILL_API.GETALL, {
        params: {
          pageIndex: pageIndex,
          pageSize: pageSize,
        },
      });
      if (res.data.isSuccess) {
        dispatch(getBillSuccess(res.data));
      } else {
        dispatch(getBillFailure(res.data));
      }
    } catch (error) {
      dispatch(getBillFailure(error));
    }
  };
};

// Create Bill:

export const createBillRequest = () => {
  return {
    type: CREATE_BILL_REQUEST,
  };
};

export const createBillSuccess = (bill) => {
  return {
    type: CREATE_BILL_SUCCESS,
    payload: bill,
  };
};

export const createBillFailure = (error) => {
  return {
    type: CREATE_BILL_FAILURE,
    payload: error,
  };
};

export const createBill = () => {};

// Delete Bill

export const deleteBillRequest = () => {
  return {
    type: DELETE_BILL_REQUEST,
  };
};

export const deleteBillSuccess = (bill) => {
  return {
    type: DELETE_BILL_SUCCESS,
    payload: bill,
  };
};

export const deleteBillFailure = (error) => {
  return {
    type: DELETE_BILL_FAILURE,
    payload: error,
  };
};

export const deleteBill = (billID) => {
  return async (dispatch) => {
    dispatch(deleteBillRequest());
    try {
      const res = await axios.delete(`${BILL_API.DELETE}/${billID}`);
      if (res.data.isSuccess) {
        dispatch(deleteBillSuccess(res.data));
        dispatch(getAllBill());
      } else {
        dispatch(deleteBillFailure(res.data));
      }
    } catch (error) {
      dispatch(deleteBillFailure(error));
    }
  };
};

// Get Bill By ID:

export const getBillByIDRequest = () => {
  return {
    type: GET_BILL_BY_ID_REQUEST,
  };
};

export const getBillByIDSuccess = (bill) => {
  return {
    type: GET_BILL_BY_ID_SUCCESS,
    payload: bill,
  };
};

export const getBillByIDFailure = (error) => {
  return {
    type: GET_BILL_BY_ID_FAILURE,
    payload: error,
  };
};

export const getBillByID = ({ billID }) => {
  return async (dispatch) => {
    dispatch(getBillByIDRequest());
    try {
      const res = await axios.get(`${BILL_API.GETBILLBYID}/${billID}`);
      if (res.data.isSuccess) {
        dispatch(getBillByIDSuccess(res.data));
        dispatch(getAllBill());
      } else {
        dispatch(getBillByIDFailure(res.data));
      }
    } catch (error) {
      dispatch(getBillByIDFailure(error));
    }
  };
};

// Get bill by plate number

export const getBillByPlateNumberRequest = () => {
  return {
    type: GET_BILL_BY_PLATENUMBER_REQUEST,
  };
};

export const getBillByPlateNumberSuccess = (bill) => {
  return {
    type: GET_BILL_BY_PLATENUMBER_SUCCESS,
    payload: bill,
  };
};

export const getBillByPlateNumberFailure = (error) => {
  return {
    type: GET_BILL_BY_PLATENUMBER_FAILURE,
    payload: error,
  };
};

export const getBillByPlateNumber = ({ plateNumber }) => {
  return async (dispatch) => {
    dispatch(getBillByPlateNumberRequest());
    try {
      const res = axios.get(`${BILL_API.GETBILLBYPLATENUMBER}/${plateNumber}`);
      if (!res.data.isSuccess) {
        dispatch(getBillByPlateNumberFailure(res.data));
      } else {
        dispatch(getBillByPlateNumberSuccess(res.data));
        dispatch(getAllBill());
      }
    } catch (error) {
      dispatch(getBillByPlateNumberFailure(error));
    }
  };
};
