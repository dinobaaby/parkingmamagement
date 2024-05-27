import React, { useEffect, useRef, useState } from "react";
import img_df from "../../assets/images/avatar_default.jpg";
import "./Profile.css";
import { useSelector, useDispatch } from "react-redux";
import { authLogout } from "../../features/auth/authAction";
import { useNavigate } from "react-router-dom";

export default function Profile() {
    const [onOpenProfile, setOnOpenProfile] = useState(false);
    const profileRef = useRef(null);
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.auth.isAuth);
    const nagiavate = useNavigate();
    const handleOpenProfile = () => {
        setOnOpenProfile((prev) => !prev);
    };
    const handleClickOutside = (e) => {
        if (profileRef.current && !profileRef.current.contains(e.target)) {
            setOnOpenProfile(false);
        }
    };

    const handleLogout = () => {
        dispatch(authLogout());
        if (!isAuth || user.userData === null) {
            nagiavate("/login");
        }
    };
    const user = useSelector((state) => state.auth.user);

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [onOpenProfile]);

    useEffect(() => {
        if (!isAuth || user.userData === null) {
            nagiavate("/login");
        }
    }, [user, isAuth, nagiavate]);

    return (
        <div className="header-action-profile" ref={profileRef}>
            <div className="profile-avatar">
                <img
                    onClick={handleOpenProfile}
                    width={30}
                    src={img_df}
                    alt=""
                    onBlur={() => setOnOpenProfile(false)}
                />
            </div>
            {onOpenProfile && (
                <div className="profile-info">
                    <span className="profile-info-name">
                        {user.userData
                            ? user.userData.email
                            : "admin@gmail.com"}
                    </span>
                    <span className="profile-info-role">Admin</span>
                    <hr />
                    <span>Home</span>
                    <span>Profile</span>
                    <span>Settings</span>
                    <hr />
                    <span onClick={handleLogout}>Logout</span>
                </div>
            )}
        </div>
    );
}
