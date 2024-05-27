import React, { useState } from "react";
import PropTypes from "prop-types";
import SideBar from "./SideBar";
import Header from "./Header";
import "./DashboardLayout.css";
import "react-toastify/dist/ReactToastify.css";
import { Bounce, ToastContainer } from "react-toastify";
export default function DashboardLayout({ children }) {
    const [openSidebar, setOpenSidebar] = useState(true);
    const handleToggleSidebar = () => {
        setOpenSidebar((prev) => !prev);
    };
    return (
        <div className={`dashboardlayout ${openSidebar ? "" : "sidebarclose"}`}>
            {openSidebar && <SideBar />}
            <div className="content-container">
                <Header onOpenSidebar={handleToggleSidebar} />
                <div>{children}</div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </div>
    );
}
DashboardLayout.propTypes = { children: PropTypes.node.isRequired };
