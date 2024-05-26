import React from "react";
import "./Notifications.css";
import { IoIosNotifications } from "react-icons/io";
export default function Notifications() {
    return (
        <div className="header-action-notifications">
            <div className="notification-icon">
                <IoIosNotifications size={30} color="grey" />
                <span>2</span>
            </div>
            <div className="notification-infos"></div>
        </div>
    );
}
