import React from "react";
import styles from "./OverView.module.scss";
import classNames from "classnames/bind";
import OverViewItem from "./OverViewItem";
import { dashboardData } from "../../assets/data/index";
const cx = classNames.bind(styles);

export default function ListCardOverView() {
    console.log(dashboardData);
    return (
        <div className={cx("list-card")}>
            {dashboardData.map((item) => {
                return <OverViewItem key={item.id} data={item} />;
            })}
        </div>
    );
}
