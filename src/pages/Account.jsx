import styles from "../assets/styles/Account.module.scss";
import classNames from "classnames/bind";
import React from "react";
import AccountTable from "../components/AccountAction/AccountTable";

const cx = classNames.bind(styles);

export default function Account() {
  return (
    <div className={cx("account-page")}>
      <div className={cx("header")}>Account</div>
      <AccountTable />
    </div>
  );
}
