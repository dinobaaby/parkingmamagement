import React from "react";
import { PieChart } from "@mui/x-charts";
import classNames from "classnames/bind";

import styles from "./CycleChartAmountTicket.module.scss";
const cx = classNames.bind(styles);

export default function CycleChartAmountTicket() {
    const dataChart = [
        { id: 0, value: 10, label: "series A" },
        { id: 1, value: 15, label: "series B" },
        { id: 2, value: 20, label: "series C" },
        { id: 3, value: 20, label: "series D" },
    ];
    return (
        <div className={cx("charts")}>
            <div className={cx("piechart")}>
                <div className={cx("piechart-header")}>
                    <h2>Amount Ticket</h2>
                </div>
                <PieChart
                    className={cx("piechart-chart")}
                    series={[
                        {
                            data: dataChart,
                        },
                    ]}
                    slotProps={{
                        legend: { hidden: true },
                    }}
                    width={300}
                />
                <div className={cx("piechart-lable")}>
                    {dataChart.map((item) => {
                        return (
                            <div key={item.id} className={cx("piechart-item")}>
                                <li>{item.label}</li>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
