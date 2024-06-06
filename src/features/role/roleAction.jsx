import axios from "axios";
import {
  GET_ALL_ROLE_REQUEST,
  GET_ALL_ROLE_SUCCESS,
  GET_ALL_ROLE_FAILURE,
  CREATE_ROLE_REQUEST,
  CREATE_ROLE_SUCCESS,
  CREATE_ROLE_FAILURE,
  UPDATE_ROLE_REQUEST,
  UPDATE_ROLE_SUCCESS,
  UPDATE_ROLE_FAILURE,
  DELETE_ROLE_REQUEST,
  DELETE_ROLE_SUCCESS,
  DELETE_ROLE_FAILURE,
} from "./roleType";
import { ROLE_API } from "../../config/ApiUrl";

// Get Role:

export const getRoleRequest = () => {
  return {
    type: GET_ALL_ROLE_REQUEST,
  };
};

export const getRoleSuccess = (roles) => {
  return {
    type: GET_ALL_ROLE_SUCCESS,
    payload: roles,
  };
};

export const getRoleFailure = (error) => {
  return {
    type: GET_ALL_ROLE_FAILURE,
    payload: error,
  };
};

export const getAllRoles = () => {
  return async (dispatch) => {
    dispatch(getRoleRequest());
    try {
      const res = await axios.get(ROLE_API.GETALL);
      if (res.data.isSuccess) {
        dispatch(getRoleSuccess(res.data));
      } else {
        dispatch(getRoleFailure(res.data));
      }
    } catch (error) {
      dispatch(getRoleFailure(error));
    }
  };
};

// Create Role:

export const createRoleRequest = () => {
  return {
    type: CREATE_ROLE_REQUEST,
  };
};

export const createRoleSuccess = (role) => {
  return {
    type: CREATE_ROLE_SUCCESS,
    payload: role,
  };
};

export const createRoleFailure = (error) => {
  return {
    type: CREATE_ROLE_FAILURE,
    payload: error,
  };
};

export const createRole = (roleName) => {
  return async (dispatch) => {
    dispatch(createRoleRequest());
    try {
      const res = await axios.post(ROLE_API.CREATE, null, {
        params: {
          name: roleName,
        },
      });
      if (res.data.isSuccess) {
        dispatch(createRoleSuccess(res.data));
        dispatch(getAllRoles())
      } else {
        dispatch(createRoleFailure(res.data));
      }
    } catch (error) {
      dispatch(createRoleFailure(error));
    }
  };
};

// Update Role:

export const updateRoleRequest = () => {
  return {
    type: UPDATE_ROLE_REQUEST,
  };
};

export const updateRoleSuccess = (role) => {
  return {
    type: UPDATE_ROLE_SUCCESS,
    payload: role,
  };
};

export const updateRoleFailure = (error) => {
  return {
    type: UPDATE_ROLE_FAILURE,
    payload: error,
  };
};

export const updateRole = (role) => {
  return async (dispatch) => {
    dispatch(updateRoleRequest());
    console.log(role);
    try {
      const res = await axios.put(ROLE_API.UPDATE, role);
      if (res.data.isSuccess) {
        dispatch(updateRoleSuccess(res.data.payload));
        dispatch(getAllRoles());
      } else {
        dispatch(updateRoleFailure(res.data.payload));
      }
    } catch (error) {
      dispatch(updateRoleFailure(error));
    }
  };
};
// Delete Role:

export const deleteRoleRequest = () => {
  return {
    type: DELETE_ROLE_REQUEST,
  };
};

export const deleteRoleSuccess = (role) => {
  return {
    type: DELETE_ROLE_SUCCESS,
    payload: role,
  };
};

export const deleteRoleFailure = (error) => {
  return {
    type: DELETE_ROLE_FAILURE,
    payload: error,
  };
};

export const deleteRole = (roleName) => {
  return async (dispatch) => {
    dispatch(deleteRoleRequest);
    try {
      const res = await axios.delete(`${ROLE_API.DELETE}/${roleName}`);
      if (res.data.isSuccess) {
        dispatch(deleteRoleSuccess(res.data));
        dispatch(getAllRoles())
      } else {
        dispatch(deleteRoleFailure(res.data));
      }
    } catch (error) {
      dispatch(deleteRoleFailure(error));
    }
  };
};
