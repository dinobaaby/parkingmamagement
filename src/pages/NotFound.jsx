import React from "react";
import classNames from "classnames/bind";
import styles from "../assets/styles/Notfound.module.scss";
const cx = classNames.bind(styles);
import animation from "../assets/images/jaconda-17.gif";
export default function NotFound() {
    return (
        <div className={cx("notfound-page")}>
            <div className={cx("notfound-container")}>
                <div className={cx("notfound-title")}>
                    <img src={animation} alt="" />
                </div>
                <div className={cx("notfound-actions")}>
                    <span>Somethings error</span>
                    <p>
                        Sorry, the page you are looking for could not be found.
                    </p>
                    <div className={cx("btn-actions")}>
                        <button className={cx("btn-backtohome")}>Home</button>
                        <button className={cx("btn-login")}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
