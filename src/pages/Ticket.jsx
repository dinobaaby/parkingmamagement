import React from "react";
import classNames from "classnames/bind";
import styles from "../assets/styles/Ticket.module.scss";
import TicketAction from "../components/TicketAction/TicketAction";
import TicketTable from "../components/TicketAction/TicketTable";

const cx = classNames.bind(styles);

export default function Ticket() {
    return (
        <div className={cx("ticket-page")}>
            <div className={cx("header")}>
                <h2>Ticket</h2>
            </div>
            <TicketAction />
            <TicketTable />
        </div>
    );
}
