import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "../../assets/styles/Customer.module.scss";
import InputField from "../InputField/InputField";
import { useDispatch, useSelector } from "react-redux";
import {
    createCustomer,
    getAllCustomers,
} from "../../features/customer/customerAction";
import Loader from "../Loader/Loader";

const cx = classNames.bind(styles);
export default function CustomerHeader() {
    const [customerName, setCustomerName] = useState("");
    const [customerPhoneNumber, setCustomerPhoneNumber] = useState("");
    const [customerCardId, setCustomerCardId] = useState("");
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.customer.loading);
    const hanleChangeName = (value) => {
        setCustomerName(value);
    };
    const hanleChangePhoneNumber = (value) => {
        setCustomerPhoneNumber(value);
    };
    const hanleChangeCardId = (value) => {
        setCustomerCardId(value);
    };
    const handleCreateCustomer = () => {
        dispatch(
            createCustomer({
                customerId: 0,
                customerName,
                customerPhoneNumber,
                customerIdCard: customerCardId,
            })
        );
        setCustomerName("");
        setCustomerPhoneNumber("");
        setCustomerCardId("");
    };

    return (
        <div className={cx("customer-header")}>
            <InputField
                value={customerName}
                label={"Customer name"}
                onChangeValue={hanleChangeName}
            />
            <InputField
                value={customerPhoneNumber}
                label={"Phone number"}
                onChangeValue={hanleChangePhoneNumber}
            />
            <InputField
                value={customerCardId}
                label={"Id card"}
                onChangeValue={hanleChangeCardId}
            />
            <button onClick={handleCreateCustomer} className={cx("btn-search")}>
                {isLoading ? <Loader /> : "CREATE"}
            </button>
        </div>
    );
}
