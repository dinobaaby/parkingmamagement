import React from "react";
import styles from "../assets/styles/Bill.module.scss";
import classNames from "classnames/bind";
import BillTable from "../components/BillAction/BillTable";

const cx = classNames.bind(styles);

export default function Bill() {
  return (
    <div className={cx("bill-page")}>
      <div className={cx("bill-container")}>
        <BillTable />
      </div>
    </div>
  );
}
