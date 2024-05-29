import React from "react";
import classNames from "classnames/bind";
import styles from "../assets/styles/Notfound.module.scss";
const cx = classNames.bind(styles);
export default function NotFound() {
    return (
        <div id={cx("notfound")}>
            <div className={cx("notfound")}>
                <div className={cx("notfound-404")}>
                    <h1>
                        <span>4</span>
                        <span>0</span>
                        <span>4</span>
                    </h1>
                </div>
                <h2>We are sorry, Page not found!</h2>
                <p>
                    The page you are looking for might have been removed had its
                    name changed or is temporarily unavailable.
                </p>
                <a href="/">Back To Homepage</a>
            </div>
        </div>
    );
}
