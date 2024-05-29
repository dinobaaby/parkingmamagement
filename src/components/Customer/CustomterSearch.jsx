import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "../../assets/styles/Customer.module.scss";
import InputField from "../InputField/InputField";
const cx = classNames.bind(styles);
export default function CustomterSearch() {
    const [customerId, setCustomerId] = useState(null);
    const [customerName, setCustomerName] = useState("");
    const [customerPhoneNumber, setCustomerPhoneNumber] = useState("");

    const handleChangeCustomerId = (value) => {
        setCustomerId(value);
    };
    const handleChangeCustomerName = (value) => {
        setCustomerName(value);
    };
    const handleChangeCustomerPhoneNumber = (value) => {
        setCustomerPhoneNumber(value);
    };

    return (
        <div className={cx("customer-search")}>
            <InputField
                value={customerId}
                type="number"
                label={"Customer ID"}
                onChangeValue={handleChangeCustomerId}
            />
            <InputField
                value={customerName}
                label={"Customer name"}
                onChangeValue={handleChangeCustomerName}
            />
            <InputField
                value={customerPhoneNumber}
                label={"Customer Phone"}
                onChangeValue={handleChangeCustomerPhoneNumber}
            />
        </div>
    );
}
