import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "../../assets/styles/Customer.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAllCustomers } from "../../features/customer/customerAction";
const cx = classNames.bind(styles);
export default function CustomerTable() {
    const [currentPage, setCurrentPage] = useState(1);

    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.customer.loading);
    const customers = useSelector((state) => state.customer.customers);

    console.log({ customers });
    console.log(customers);
    useEffect(() => {
        dispatch(getAllCustomers(currentPage, 10));
    }, [dispatch, currentPage]);
    return (
        <table className={cx("customer-table")}>
            <thead>
                <tr>
                    <th>Customer Name</th>
                    <th>Phone</th>
                    <th>Id card</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {isLoading ? (
                    <tr>
                        <td colSpan={5}>Loading...</td>
                    </tr>
                ) : (
                    customers.result &&
                    customers.result.map((customer) => {
                        return (
                            <tr key={customer.customerId}>
                                <td>{customer.customerName}</td>
                                <td>{customer.customerPhoneNumber}</td>
                                <td>{customer.customerIdCard}</td>
                                <td>Action</td>
                            </tr>
                        );
                    })
                )}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="2">Total: 2</td>
                    <td></td>
                    <td>
                        <button
                            style={{
                                visibility:
                                    currentPage === 1 ? "hidden" : "visible",
                            }}
                            className={cx("prev")}
                        >
                            Prev
                        </button>
                        <div
                            style={{
                                visibility:
                                    currentPage === 1 ? "hidden" : "visible",
                            }}
                            className={cx("pageIndex")}
                        >
                            {Array.from({ length: currentPage }).map((_, i) => {
                                return (
                                    <span
                                        className={cx(
                                            `${
                                                i + 1 === currentPage
                                                    ? "active"
                                                    : ""
                                            }`
                                        )}
                                        key={i}
                                    >
                                        {i + 1}
                                    </span>
                                );
                            })}
                        </div>
                        <button className={cx("next")}>Next</button>
                    </td>
                </tr>
            </tfoot>
        </table>
    );
}
