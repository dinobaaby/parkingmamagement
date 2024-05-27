import React from "react";
import classNames from "classnames/bind";
import styles from "../assets/styles/Slot.module.scss";
const cx = classNames.bind(styles);

export default function Slot() {
    return <div className={cx("slot-page")}></div>;
}
