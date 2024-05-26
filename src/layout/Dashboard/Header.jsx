import React from "react";
import PropTypes from "prop-types";
import { MdOutlineMenu } from "react-icons/md";
import Profile from "../../components/Profile/Profile";
import Notifications from "../../components/Notifications/Notifications";

export default function Header({ onOpenSidebar }) {
    return (
        <header>
            <button className="btn-opensidebar" onClick={onOpenSidebar}>
                <MdOutlineMenu />
            </button>
            <div className="header-searh-container"></div>
            <div className="header-actions">
                <Notifications />
                <Profile />
            </div>
        </header>
    );
}

Header.propTypes = {
    onOpenSidebar: PropTypes.func.isRequired,
};
