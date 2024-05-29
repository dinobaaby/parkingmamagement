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

import customerApi from "../../services/customerApi";

// Get all customers
export const getAllCustomerRequest = () => {
    return {
        type: GET_ALL_CUSTOMER_REQUEST,
    };
};

export const getAllCustomerSuccess = (customers) => {
    return {
        type: GET_ALL_CUSTOMER_SUCCESS,
        payload: customers,
    };
};
export const getAllCustomerFailure = (error) => {
    return {
        type: GET_ALL_CUSTOMER_FAILURE,
        payload: error,
    };
};

export const getAllCustomers = (pageIndex, pageSize) => {
    return async (dispatch) => {
        dispatch(getAllCustomerRequest());
        try {
            const res = await customerApi.getCustomers(pageIndex, pageSize);
            console.log({ res });
            if (res.data.isSuccess) {
                dispatch(getAllCustomerSuccess(res.data));
            } else {
                dispatch(getAllCustomerFailure(res.data));
            }
        } catch (error) {
            dispatch(getAllCustomerFailure(error.message));
        }
    };
};

// Create customer
export const createCustomerRequest = () => {
    return {
        type: CREATE_CUSTOMER_REQUEST,
    };
};
export const createCustomerSuccess = (customer) => {
    return {
        type: CREATE_CUSTOMER_SUCCESS,
        payload: customer,
    };
};
export const createCustomerFailure = (error) => {
    return {
        type: CREATE_CUSTOMER_FAILURE,
        payload: error,
    };
};
// Create customer
export const createCustomer = (customer) => {
    return async (dispatch) => {
        dispatch(createCustomerRequest());
        try {
            const { data } = await customerApi.createCustomer(customer);
            if (data.isSuccess) {
                dispatch(createCustomerSuccess(data));
                dispatch(getAllCustomers(1, 10));
            } else {
                dispatch(createCustomerFailure(data.message));
            }
        } catch (error) {
            dispatch(createCustomerFailure(error.message));
        }
    };
};
export const updateCustomerRequest = () => {
    return {
        type: UPDATE_CUSTOMER_REQUEST,
    };
};

// Update customer
export const updateCustomerSuccess = (customer) => {
    return {
        type: UPDATE_CUSTOMER_SUCCESS,
        payload: customer,
    };
};
export const updateCustomerFailure = (error) => {
    return {
        type: UPDATE_CUSTOMER_FAILURE,
        payload: error,
    };
};
export const updateCustomer = (customer) => {
    return async (dispatch) => {
        dispatch(updateCustomerRequest());
        try {
            const { data } = await customerApi.updateCustomer(customer);
            if (data.isSuccess) {
                dispatch(updateCustomerSuccess(data));
            } else {
                dispatch(updateCustomerFailure(data.message));
            }
        } catch (error) {
            dispatch(updateCustomerFailure(error.message));
        }
    };
};

// Delete customer
export const deleteCustomerRequest = () => {
    return {
        type: DELETE_CUSTOMER_REQUEST,
    };
};
export const deleteCustomerSuccess = (customer) => {
    return {
        type: DELETE_CUSTOMER_SUCCESS,
        payload: customer,
    };
};
export const deleteCustomerFailure = (error) => {
    return {
        type: DELETE_CUSTOMER_FAILURE,
        payload: error,
    };
};
export const deleteCustomer = (id) => {
    return async (dispatch) => {
        dispatch(deleteCustomerRequest());
        try {
            const { data } = await customerApi.deleteCustomer(id);
            if (data.isSuccess) {
                dispatch(deleteCustomerSuccess(data));
            } else {
                dispatch(deleteCustomerFailure(data.message));
            }
        } catch (error) {
            dispatch(deleteCustomerFailure(error.message));
        }
    };
};

// Get customer by id
export const getCustomerByIdRequest = () => {
    return {
        type: GET_CUSTOMER_BY_ID_REQUEST,
    };
};
export const getCustomerByIdSuccess = (customer) => {
    return {
        type: GET_CUSTOMER_BY_ID_SUCCESS,
        payload: customer,
    };
};
export const getCustomerByIdFailure = (error) => {
    return {
        type: GET_CUSTOMER_BY_ID_FAILURE,
        payload: error,
    };
};
export const getCustomerById = (id) => {
    return async (dispatch) => {
        dispatch(getCustomerByIdRequest());
        try {
            const { data } = await customerApi.getCustomer(id);
            if (data.isSuccess) {
                dispatch(getCustomerByIdSuccess(data));
            } else {
                dispatch(getCustomerByIdFailure(data.message));
            }
        } catch (error) {
            dispatch(getCustomerByIdFailure(error.message));
        }
    };
};

// Get customer by name
export const getCustomerByNameRequest = () => {
    return {
        type: GET_CUSTOMER_NAME_REQUEST,
    };
};
export const getCustomerByNameSuccess = (customer) => {
    return {
        type: GET_CUSTOMER_NAME_SUCCESS,
        payload: customer,
    };
};
export const getCustomerByNameFailure = (error) => {
    return {
        type: GET_CUSTOMER_NAME_FAILURE,
        payload: error,
    };
};
export const getCustomerByName = (name, pageIndex, pageSize) => {
    return async (dispatch) => {
        dispatch(getCustomerByNameRequest());
        try {
            const { data } = await customerApi.getCustomerByName(
                name,
                pageIndex,
                pageSize
            );
            if (data.isSuccess) {
                dispatch(getCustomerByNameSuccess(data));
            } else {
                dispatch(getCustomerByNameFailure(data.message));
            }
        } catch (error) {
            dispatch(getCustomerByNameFailure(error.message));
        }
    };
};

// Get customer by phone
export const getCustomerByPhoneRequest = () => {
    return {
        type: GET_CUSTOMER_PHONE_REQUEST,
    };
};
export const getCustomerByPhoneSuccess = (customer) => {
    return {
        type: GET_CUSTOMER_PHONE_SUCCESS,
        payload: customer,
    };
};
export const getCustomerByPhoneFailure = (error) => {
    return {
        type: GET_CUSTOMER_PHONE_FAILURE,
        payload: error,
    };
};
export const getCustomerByPhone = (phone) => {
    return async (dispatch) => {
        dispatch(getCustomerByPhoneRequest());
        try {
            const { data } = await customerApi.getCustomerByPhone(phone);
            if (data.isSuccess) {
                dispatch(getCustomerByPhoneSuccess(data));
            } else {
                dispatch(getCustomerByPhoneFailure(data.message));
            }
        } catch (error) {
            dispatch(getCustomerByPhoneFailure(error.message));
        }
    };
};
