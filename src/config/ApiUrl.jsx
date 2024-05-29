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

export const FILE = {
    GET: "https://localhost:4000/api/upload",
};
