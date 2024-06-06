import axios from "axios";
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
  GET_ACCOUNT_BY_NAME_FAILURE,
} from "./accountType";
import { ACCOUNT_API } from "../../config/ApiUrl";

// Get Account:

export const getAccountRequest = () => {
  return {
    type: GET_ALL_ACCOUNT_REQUEST,
  };
};

export const getAccountSuccess = (accounts) => {
  return {
    type: GET_ALL_ACCOUNT_SUCCESS,
    payload: accounts,
  };
};

export const getAccountFailure = (error) => {
  return {
    type: GET_ALL_ACCOUNT_FAILURE,
    payload: error,
  };
};

export const getAllAccounts = () => {
  return async (dispatch) => {
    dispatch(getAccountRequest());
    try {
      const res = await axios.get(ACCOUNT_API.GETALL);
      if (res.data.isSuccess) {
        dispatch(getAccountSuccess(res.data));
      } else {
        dispatch(getAccountFailure(res.data));
      }
    } catch (error) {
      dispatch(getAccountFailure());
    }
  };
};

// Create Account:

export const createAccountRequest = () => {
  return {
    type: CREATE_ACCOUNT_REQUEST,
  };
};

export const createAccountSuccess = (account) => {
  return {
    type: CREATE_ACCOUNT_SUCCESS,
    payload: account,
  };
};

export const createAccountFailure = (error) => {
  return {
    type: CREATE_ACCOUNT_FAILURE,
    payload: error,
  };
};

export const createAccount = (account) => {
  return async (dispatch) => {
    dispatch(createAccountRequest());
    try {
      const res = await axios.post(ACCOUNT_API.CREATE, account);
      if (res.data.isSuccess) {
        dispatch(createAccountSuccess(res.data));
        dispatch(getAllAccounts());
      } else {
        dispatch(createAccountFailure(res.data));
      }
    } catch (error) {
      dispatch(createAccountFailure(error));
    }
  };
};

// Update Account

export const updateAccountRequest = () => {
  return {
    type: UPDATE_ACCOUNT_REQUEST,
  };
};

export const updateAccountSuccess = (account) => {
  return {
    type: UPDATE_ACCOUNT_SUCCESS,
    payload: account,
  };
};

export const updateAccountFailure = (error) => {
  return {
    type: UPDATE_ACCOUNT_FAILURE,
    payload: error,
  };
};

export const updateAccount = (account) => {
  return async (dispatch) => {
    dispatch(updateAccountRequest());
    console.log(account);
    try {
      const res = axios.patch(ACCOUNT_API.UPDATE, account);
      if (res.data.isSuccess) {
        dispatch(updateAccountSuccess(res.data));
        dispatch(getAllAccounts());
      } else {
        dispatch(updateAccountFailure(res.data));
      }
    } catch (error) {
      dispatch(updateAccountFailure(error));
    }
  };
};

// Delete Account

export const deleteAccountRequest = () => {
  return {
    type: DELETE_ACCOUNT_REQUEST,
  };
};

export const deleteAccountSuccess = (account) => {
  return {
    type: DELETE_ACCOUNT_SUCCESS,
    payload: account,
  };
};

export const deleteAccountFailure = (error) => {
  return {
    type: DELETE_ACCOUNT_FAILURE,
    payload: error,
  };
};

export const deleteAccount = (email) => {
  return async (dispatch) => {
    dispatch(deleteAccountRequest());
    try {
      const res = await axios.delete(`${ACCOUNT_API.DELETE}/${email}`);
      if (res.data.isSuccess) {
        dispatch(deleteAccountSuccess(res.data));
        dispatch(getAllAccounts());
      } else {
        dispatch(deleteAccountFailure(res.data));
      }
    } catch (error) {
      dispatch(deleteAccountFailure(error));
    }
  };
};

// Get Account By Name

export const getAccountByNameRequest = () => {
  return {
    type: GET_ACCOUNT_BY_NAME_REQUEST,
  };
};

export const getAccountByNameSuccess = (account) => {
  return {
    type: GET_ACCOUNT_BY_NAME_SUCCESS,
    payload: account,
  };
};

export const getAccountByNameFailure = (error) => {
  return {
    type: GET_ACCOUNT_BY_NAME_FAILURE,
    payload: error,
  };
};

export const getAccountByName = ({ accountName }) => {
  return async (dispatch) => {
    dispatch(getAccountByNameRequest());
    try {
      const res = await axios.get(ACCOUNT_API.GETACCOUNTBYNAME, {
        params: {
          name: accountName,
        },
      });
      if (res.data.isSuccess) {
        dispatch(getAccountByNameSuccess(res.data));
        dispatch(getAllAccounts());
      } else {
        dispatch(getAccountByNameFailure(res.data));
      }
    } catch (error) {
      dispatch(getAccountByNameFailure(error));
    }
  };
};
