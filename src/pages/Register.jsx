import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "../assets/styles/Register.module.scss";
import { BsGoogle } from "react-icons/bs";
import { FaFacebook, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
const cx = classNames.bind(styles);

export default function Register() {
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [cardId, setCardId] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [onShowPassword, setOnShowPassword] = useState(false);

    const [onEmailFocus, setOnEmailFocus] = useState(false);
    const [onUserNameFocus, setOnUserNameFocus] = useState(false);
    const [onPasswordFocus, setOnPasswordFocus] = useState(false);
    const [onCardIdFocus, setOnCardIdFocus] = useState(false);
    const [onPhoneNumberFocus, setOnPhoneNumberFocus] = useState(false);

    const handleShowPassword = () => {
        setOnShowPassword(!onShowPassword);
    };

    return (
        <div className={cx("register-page")}>
            <div className={cx("register-form")}>
                <div className={cx("register-form-right")}>
                    <img src="assets/svgs/register.svg" alt="" />
                </div>
                <div className={cx("register-form-left")}>
                    <div className={cx("register-form-create")}>
                        <div className={cx("form-left-header")}>
                            <span className={cx("header-title")}>
                                Create your account
                            </span>
                            <span className={cx("header-des")}>
                                No credit card needed
                            </span>
                        </div>
                        <div className={cx("login-form-body")}>
                            <div className={cx("login-field-email")}>
                                <label
                                    className={cx(
                                        `${
                                            email || onEmailFocus
                                                ? "has-content"
                                                : ""
                                        }`
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
                            <div className={cx("login-field-username")}>
                                <label
                                    className={cx(
                                        `${
                                            userName || onUserNameFocus
                                                ? "has-content"
                                                : ""
                                        }`
                                    )}
                                    htmlFor="username"
                                >
                                    UserName
                                </label>
                                <input
                                    name="username"
                                    onFocus={() => setOnUserNameFocus(true)}
                                    onBlur={() => setOnUserNameFocus(false)}
                                    value={userName}
                                    onChange={(e) =>
                                        setUserName(e.target.value)
                                    }
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
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    type={onShowPassword ? "text" : "password"}
                                />
                                <button
                                    onClick={handleShowPassword}
                                    className={cx("btn-showpass")}
                                >
                                    {onShowPassword ? (
                                        <FaRegEyeSlash />
                                    ) : (
                                        <FaRegEye />
                                    )}
                                </button>
                            </div>
                            <div
                                className={cx("login-field-cardid-phonenumber")}
                            >
                                <div className={cx("login-field-cardid")}>
                                    <label
                                        className={cx(
                                            `${
                                                cardId || onCardIdFocus
                                                    ? "has-content"
                                                    : ""
                                            }`
                                        )}
                                        htmlFor="cardid"
                                    >
                                        Card ID
                                    </label>
                                    <input
                                        name="cardid"
                                        onFocus={() => setOnCardIdFocus(true)}
                                        onBlur={() => setOnCardIdFocus(false)}
                                        value={cardId}
                                        onChange={(e) =>
                                            setCardId(e.target.value)
                                        }
                                        type="text"
                                    />
                                </div>
                                <div className={cx("login-field-phonenumber")}>
                                    <label
                                        className={cx(
                                            `${
                                                phoneNumber ||
                                                onPhoneNumberFocus
                                                    ? "has-content"
                                                    : ""
                                            }`
                                        )}
                                        htmlFor="username"
                                    >
                                        PhoneNumber
                                    </label>
                                    <input
                                        name="username"
                                        onFocus={() =>
                                            setOnPhoneNumberFocus(true)
                                        }
                                        onBlur={() =>
                                            setOnPhoneNumberFocus(false)
                                        }
                                        value={phoneNumber}
                                        onChange={(e) =>
                                            setPhoneNumber(e.target.value)
                                        }
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className={cx("register-btn")}>
                                <button>Create account</button>
                            </div>
                        </div>
                        <div className={cx("signup-with")}>
                            <span>or sign in with</span>
                        </div>
                        <div className={cx("signup-providers")}>
                            <div>
                                <BsGoogle />
                                <span>Google</span>
                            </div>
                            <div>
                                <FaFacebook />
                                <span>Facebook</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
