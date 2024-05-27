import React from "react";
import classNames from "classnames/bind";
import styles from "../assets/styles/Customer.module.scss";
import CustomerHeader from "../components/Customer/CustomerHeader";
import CustomerTable from "../components/Customer/CustomerTable";
import CustomterSearch from "../components/Customer/CustomterSearch";

const cx = classNames.bind(styles);
export default function Customer() {
    return (
        <div className={cx("customer-page")}>
            <CustomerHeader />
            <hr />
            <CustomterSearch />
            <hr />
            <CustomerTable />
        </div>
    );
}
