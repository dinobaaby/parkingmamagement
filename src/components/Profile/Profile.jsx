import React, { useEffect, useRef, useState } from "react";
import "./Profile.css";
export default function Profile() {
    const [onOpenProfile, setOnOpenProfile] = useState(false);
    const profileRef = useRef(null);
    const handleOpenProfile = () => {
        setOnOpenProfile((prev) => !prev);
    };
    const handleClickOutside = (e) => {
        if (profileRef.current && !profileRef.current.contains(e.target)) {
            setOnOpenProfile(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [onOpenProfile]);

    return (
        <div className="header-action-profile" ref={profileRef}>
            <div className="profile-avatar">
                <img
                    onClick={handleOpenProfile}
                    width={30}
                    src="assets/images/avatar_default.jpg"
                    alt=""
                    onBlur={() => setOnOpenProfile(false)}
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
