import { BsPersonFillGear } from "react-icons/bs";
import { FaCheckToSlot, FaTicket } from "react-icons/fa6";
import { HiOutlineBan } from "react-icons/hi";
import { MdSpaceDashboard } from "react-icons/md";
import { PiMapPinAreaBold } from "react-icons/pi";

export const sidebarNavItems = [
    {
        name: "Dashboard",
        link: "/",
        icon: <MdSpaceDashboard />,
    },
    {
        name: "Tickets",
        link: "/tickets",
        icon: <FaTicket />,
        submenu: [
            {
                name: "Create",
                link: "/tickets/create",
            },
            {
                name: "List",
                link: "/tickets",
            },
            {
                name: "Checkout",
                link: "/tickets/Checkout",
            },
            {
                name: "Checkin",
                link: "/tickets/Checkin",
            },
        ],
    },
    {
        name: "Area",
        link: "/area",
        icon: <PiMapPinAreaBold />,
    },
    {
        name: "Account",
        link: "/account",
        icon: <BsPersonFillGear />,
    },
    {
        name: "Role",
        link: "/role",
        icon: <HiOutlineBan />,
    },
    {
        name: "Slot",
        link: "/slot",
        icon: <FaCheckToSlot />,
    },
];
