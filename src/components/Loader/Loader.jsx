import React from "react";
import classNames from "classnames/bind";
import styles from "./Loader.module.scss";
const cx = classNames.bind(styles);
export default function Loader() {
    return (
        <div className={cx("")}>
            <div cx={"load-inner load-one"}></div>
            <div></div>
            <div></div>
            <span>Loading</span>
        </div>
    );
}
