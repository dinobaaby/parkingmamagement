import React, { useState } from "react";
import { sidebarNavItems } from "../../config/SidebarNav";
import SideBarItem from "./SideBarItem.jsx";
import "./Sidebar.css";

export default function SideBarMenu() {
    const [menuItemActive, setMenuItemActive] = useState(0);

    const handleActiveMenu = (index) => {
        setMenuItemActive(index);
    };
    return (
        <ul className="sidebar-menu">
            {sidebarNavItems.map((item, index) => {
                return (
                    <SideBarItem
                        onActive={() => handleActiveMenu(index)}
                        key={index}
                        item={item}
                        isChoose={menuItemActive === index ? true : false}
                    />
                );
            })}
        </ul>
    );
}
