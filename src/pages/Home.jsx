import React from "react";
import styles from "../assets/styles/Home.module.scss";
import classNames from "classnames/bind";
import ListCardOverView from "../components/CardOverview/ListCardOverView";
import CycleChartAmountTicket from "../components/CycleChartAmountTicket/CycleChartAmountTicket";
const cx = classNames.bind(styles);

export default function Home() {
    return (
        <div className={cx("home-page")}>
            <div className={cx("home-header")}>
                <span>Hi, Welcome back 👋</span>
            </div>
            <ListCardOverView />
            <CycleChartAmountTicket />
        </div>
    );
}
