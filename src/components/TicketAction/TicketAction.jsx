import React from "react";
import classNames from "classnames/bind";
import styles from "../../assets/styles/Ticket.module.scss";
const cx = classNames.bind(styles);
export default function TicketAction() {
    return (
        <div className={cx("actions-ticket")}>
            <div className={cx("input-search-gr")}>
                <input
                    className={cx("input-search-platenb")}
                    placeholder="Search platenumber"
                />
            </div>
            <div className={cx("input-search-gr")}>
                <select className={cx("select-tickettype")}>
                    <option value={1}>Daily</option>
                    <option value={2}>Monthly</option>
                </select>
            </div>
            <div className={cx("input-search-gr")}>
                <select className={cx("select-ticketstatus")}>
                    <option value={1}>NotUse</option>
                    <option value={2}>Used</option>
                </select>
            </div>
            <button className={cx("btn-create")}>+ Create</button>
        </div>
    );
}