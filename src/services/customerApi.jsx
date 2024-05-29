import { get } from "../utils/request";
import request from "./ApiBase";

const customerApi = {
    getCustomers: async (pageIndex = 0, pageSize = 0) => {
        return await request().get("customer", {
            params: {
                pageIndex: pageIndex,
                pageSize: pageSize,
            },
        });
    },
    getCustomer: async (id) => {
        return await request().get(`customer/${id}`);
    },
    createCustomer: async (customer) => {
        return await request().post("customer", customer);
    },
    updateCustomer: async (customer) => {
        return await request().put("customer", customer);
    },
    deleteCustomer: async (id) => {
        return await request().delete(`customer/${id}`);
    },
    getCustomerByPhone: async (phone, pageIndex = 0, pageSize = 0) => {
        return await request().get(`customer/GetCustomerByPhone`, {
            params: {
                phone: phone,
                pageIndex: pageIndex,
                pageSize: pageSize,
            },
        });
    },
    getCustomerByName: async (name) => {
        return await request().get(`customer/GetCustomerByName`, {
            params: {
                phone: name,
            },
        });
    },
};

export default customerApi;
