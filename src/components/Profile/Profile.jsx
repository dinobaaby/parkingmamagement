import React, { useState } from "react";
import "./Profile.css";
export default function Profile() {
    const [onOpenProfile, setOnOpenProfile] = useState(false);
    const handleOpenProfile = () => {
        setOnOpenProfile((prev) => !prev);
    };
    return (
        <div className="header-action-profile">
            <div className="profile-avatar">
                <img
                    onClick={handleOpenProfile}
                    width={30}
                    src="assets/images/avatar_default.jpg"
                    alt=""
                />
            </div>
            {onOpenProfile && (
                <div className="profile-info">
                    <span className="profile-info-name">John Doe</span>
                    <span className="profile-info-role">Admin</span>
                    <hr />
                    <span>Home</span>
                    <span>Profile</span>
                    <span>Settings</span>
                    <hr />
                    <span>Logout</span>
                </div>
            )}
        </div>
    );
}
