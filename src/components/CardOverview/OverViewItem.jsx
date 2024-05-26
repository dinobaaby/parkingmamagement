import React from "react";
import styles from "./OverView.module.scss";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
const cx = classNames.bind(styles);

export default function OverViewItem({ data }) {
    return (
        <div className={cx("overview-card-item")}>
            <div className={cx("card-item-image")}>
                <img src={data.icon} alt={data.title} />
            </div>
            <div className={cx("card-item-content")}>
                <h3 className={cx("card-item-title")}>{data.value} K</h3>
                <p className={cx("card-item-description")}>{data.title}</p>
            </div>
        </div>
    );
}

OverViewItem.propTypes = {
    data: PropTypes.object.isRequired,
};
