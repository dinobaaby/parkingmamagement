import React, { useState } from "react";
import PropTypes from "prop-types";
import SideBar from "./SideBar";
import Header from "./Header";
import "./DashboardLayout.css";
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
        </div>
    );
}
DashboardLayout.propTypes = { children: PropTypes.node.isRequired };
