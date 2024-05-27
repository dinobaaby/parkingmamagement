import React, { useEffect, useState } from "react";
import styles from "../assets/styles/Login.module.scss";
import classNames from "classnames/bind";
import { BsGoogle, BsTwitter } from "react-icons/bs";
import { FaFacebook, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "../features/auth/authAction";

const cx = classNames.bind(styles);

export default function Login() {
    const [email, setEmail] = useState("");
    const [onEmailFocus, setOnEmailFocus] = useState(false);
    const [password, setPassword] = useState("");
    const [onPasswordFocus, setOnPasswordFocus] = useState(false);
    const [onShowPassword, setOnShowPassword] = useState(false);
    const nagiavate = useNavigate();

    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.auth.isAuth);
    const isError = useSelector((state) => state.auth.isError);
    const userData = useSelector((state) => state.auth.user);
    const isLoading = useSelector((state) => state.auth.isLoading);
    const handleLogin = () => {
        dispatch(authLogin({ email, password }));
    };
    useEffect(() => {
        if (isAuth) {
            nagiavate("/");
        } else if (isError) {
            alert("Login failed");
        }
    }, [isAuth, userData.token, nagiavate, isError]);

    const handleNagivateToSignup = () => {
        nagiavate("/register");
    };
    const handleShowPassword = () => {
        setOnShowPassword(!onShowPassword);
    };
    return (
        <div className={cx("login-page")}>
            <div className={cx("login-form")}>
                <div className={cx("login-form-header")}>
                    <span className={cx("form-header-title")}>
                        Sign in to ParkingM
                    </span>
                    <span className={cx("form-header-subtitle")}>
                        Don&apos;t have an account?{" "}
                        <a
                            onClick={handleNagivateToSignup}
                            className={cx("nagivate-sigup")}
                        >
                            Get started
                        </a>
                    </span>
                </div>
                <div className={cx("login-with-provider")}>
                    <div>
                        <BsGoogle />
                    </div>
                    <div>
                        <FaFacebook />
                    </div>
                    <div>
                        <BsTwitter />
                    </div>
                </div>
                <div className={cx("space-login-ep")}>
                    <hr />
                    <span>OR</span>
                    <hr />
                </div>
                <div className={cx("login-form-body")}>
                    <div className={cx("login-field-email")}>
                        <label
                            className={cx(
                                `${email || onEmailFocus ? "has-content" : ""}`
                            )}
                            htmlFor="email"
                        >
                            Email address
                        </label>
                        <input
                            name="email"
                            onFocus={() => setOnEmailFocus(true)}
                            onBlur={() => setOnEmailFocus(false)}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                        />
                    </div>
                    <div className={cx("login-field-password")}>
                        <label
                            className={cx(
                                `${
                                    password || onPasswordFocus
                                        ? "has-content"
                                        : ""
                                }`
                            )}
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            name="password"
                            value={password}
                            onFocus={() => setOnPasswordFocus(true)}
                            onBlur={() => setOnPasswordFocus(false)}
                            onChange={(e) => setPassword(e.target.value)}
                            type={onShowPassword ? "text" : "password"}
                        />
                        <button
                            onClick={handleShowPassword}
                            className={cx("btn-showpass")}
                        >
                            {onShowPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                        </button>
                    </div>
                    <div className={cx("forgot-pass")}>
                        <a>Forgot password?</a>
                    </div>
                    <div className={cx("login-btn")}>
                        <button onClick={handleLogin}>
                            {isLoading ? "Loading" : "Login"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
