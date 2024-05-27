import { configureStore } from "@reduxjs/toolkit";

import ticketReducer from "../features/ticket/ticketReducer";
import authReducer from "../features/auth/authReducer";
import { customerReducer } from "../features/customer/customerReducer";
export const store = configureStore({
    reducer: {
        ticket: ticketReducer,
        auth: authReducer,
        customer: customerReducer,
    },
});

export default store;
