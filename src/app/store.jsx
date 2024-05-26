import { configureStore } from "@reduxjs/toolkit";

import ticketReducer from "../features/ticket/ticketReducer";
import authReducer from "../features/auth/authReducer";
export const store = configureStore({
    reducer: {
        ticket: ticketReducer,
        auth: authReducer,
    },
});

export default store;
