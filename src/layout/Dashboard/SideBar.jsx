import React from "react";
import Logo from "../../components/Logo/Logo";
import SideBarMenu from "../../components/SideBarMenu/SideBarMenu";
import { CiSettings } from "react-icons/ci";

export default function SideBar() {
    return (
        <div className="sidebar">
            <Logo />
            <nav>
                <SideBarMenu />
            </nav>
            <div className="sidebar-footer">
                <CiSettings size={20} color="white" />
                <span style={{ color: "white" }}>Settings</span>
            </div>
        </div>
    );
}
