import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "../../assets/styles/Ticket.module.scss";
import { useDispatch } from "react-redux";
import {
    getTicketByPlateNumber,
    getTickets,
} from "../../features/ticket/ticketAction";
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(styles);
export default function TicketAction() {
    const dispatch = useDispatch();
    const nagivate = useNavigate();
    const [plateNumber, setPlateNumber] = useState("");

    const handleCreateTicket = (e) => {
        if (e.target.value) {
            dispatch(getTicketByPlateNumber({ plateNumber: e.target.value }));
            return;
        }
        dispatch(getTickets(1, 10));
    };
    return (
        <div className={cx("actions-ticket")}>
            <div className={cx("input-search-gr")}>
                <input
                    onChange={handleCreateTicket}
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
            <button
                onClick={() => nagivate("/tickets/create")}
                className={cx("btn-create")}
            >
                + Create
            </button>
        </div>
    );
}
