export const AUTH_API = {
  LOGIN: "http://localhost:5102/api/auth/Login",
};

export const TICKET_API = {
  GETALL: "http://localhost:5102/api/tickets",
  CREATE: "http://localhost:5102/api/tickets",
  UPDATE: "http://localhost:5102/api/tickets",
  DELETE: "http://localhost:5102/api/tickets",
  GETBYID: "http://localhost:5102/api/tickets/",
  GETPLATEBYPLATE: "https://localhost:4000/api/tickets/GetByPlateNumber/",
  GETBYTYPE: "http://localhost:5102/api/tickets/GetByType",
  GETBYSTATUS: "http://localhost:5102/api/tickets/GetByStatus",
  SEARCH: "http://localhost:5102/api/tickets/GetsByPlatenumber/",
  CHECKIN: "http://localhost:5102/api/tickets/CheckIn",
  CHECKOUT: "https://localhost:4000/api/tickets/CheckOut/",
};

export const ROLE_API = {
  GETALL: "https://localhost:4000/api/role",
  CREATE: "https://localhost:4000/api/role",
  UPDATE: "https://localhost:4000/api/role",
  DELETE: "https://localhost:4000/api/role",
  GETROLEWITHUSER: "https://localhost:4000/api/role/GetRoleWithUser",
};

export const ACCOUNT_API = {
  GETALL: "https://localhost:4000/api/account",
  CREATE: "https://localhost:4000/api/account",
  UPDATE: "https://localhost:4000/api/account",
  DELETE: "https://localhost:4000/api/account",
  GETACCOUNTBYNAME: "https://localhost:4000/api/account/GetUserByName",
};

export const BILL_API = {
  GETALL: "https://localhost:4000/api/bills",
  CREATE: "https://localhost:4000/api/bills",
  UPDATE: "https://localhost:4000/api/bills",
  DELETE: "https://localhost:4000/api/bills",
  GETBILLBYID: "https://localhost:4000/api/bills",
  GETBILLBYPLATENUMBER: "https://localhost:4000/api/bills/PlateNumber",
};

export const FILE = {
  GET: "https://localhost:4000/api/upload",
};
