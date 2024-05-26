import routesConfig from "../config/router";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Ticket from "../pages/Ticket";
import Area from "../pages/Area";
import Role from "../pages/Role";
import Slot from "../pages/Slot";
import CreateTicket from "../pages/CreateTicket";
import CheckInTicket from "../pages/CheckInTicket";
import CheckoutTicket from "../pages/CheckoutTicket";
const publicRoutes = [
    { path: routesConfig.login, component: Login, layout: null },
    { path: routesConfig.register, component: Register, layout: null },
    { path: routesConfig.notfound, component: NotFound, layout: null },
];

const privateRoutes = [
    { path: routesConfig.dashboard, component: Home },
    { path: routesConfig.ticket, component: Ticket },
    { path: routesConfig.area, component: Area },
    { path: routesConfig.role, component: Role },
    { path: routesConfig.slot, component: Slot },
    { path: routesConfig.ticketCreate, component: CreateTicket },
    { path: routesConfig.ticketCheckin, component: CheckInTicket },
    { path: routesConfig.ticketCheckout, component: CheckoutTicket },
];
export { publicRoutes, privateRoutes };
