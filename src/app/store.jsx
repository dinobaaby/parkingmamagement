import { configureStore } from "@reduxjs/toolkit";

import ticketReducer from "../features/ticket/ticketReducer";
import authReducer from "../features/auth/authReducer";
import { customerReducer } from "../features/customer/customerReducer";
import { roleReducer } from "../features/role/roleReducer";
import { accountReducer } from "../features/account/accountReducer";
import { billReducer } from "../features/bill/billReducer"

export const store = configureStore({
  reducer: {
    ticket: ticketReducer,
    auth: authReducer,
    customer: customerReducer,
    role: roleReducer,
    account: accountReducer,
    bill: billReducer
  },
});

export default store;
