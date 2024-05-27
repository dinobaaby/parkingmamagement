import React from "react";
import classNames from "classnames/bind";
import styles from "./Loader.module.scss";
const cx = classNames.bind(styles);
import PropTypes from "prop-types";
export default function Loader() {
    return <div className={cx("lds-dual-ring")}></div>;
}
Loader.propTypes = { width: PropTypes.number };
