import { BsPersonFillGear } from "react-icons/bs";
import { CgCheck } from "react-icons/cg";
import { FaCheckToSlot, FaTicket } from "react-icons/fa6";
import { HiOutlineBan } from "react-icons/hi";
import { MdPayments, MdSpaceDashboard } from "react-icons/md";
import { PiMapPinAreaBold } from "react-icons/pi";
import { RiCustomerService2Fill } from "react-icons/ri";

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
    {
        name: "Customer",
        link: "/customer",
        icon: <RiCustomerService2Fill />,
    },
    {
        name: "Payment",
        link: "/payment",
        icon: <MdPayments />,
        submenu: [
            {
                name: "Cash",
                link: "/payment/cash",
            },
            {
                name: "Credit",
                link: "/payment/credit",
            },
            {
                name: "BankTransfer",
                link: "/payment/banktransfer",
            },
        ],
    },
    {
        name: "Bill",
        link: "/bill",
        icon: <CgCheck />,
    },
];
