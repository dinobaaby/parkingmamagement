import React from "react";
import classNames from "classnames/bind";
import styles from "./NextAndPrev.module.scss";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);
export default function NextAndPrevButton({ children }) {
    return <div className={cx("container")}>{children}</div>;
}

NextAndPrevButton.propTypes = {
    children: PropTypes.node,
};
