import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "../../assets/styles/Ticket.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getTickets } from "../../features/ticket/ticketAction";
import { FiAlertTriangle } from "react-icons/fi";
import { IoTicket } from "react-icons/io5";
import NextAndPrev from "../NextAndPrev/NextAndPrev";
import NextAndPrevButton from "../NextAndPrev/NextAndPrevButton";
const cx = classNames.bind(styles);
export default function TicketTable() {
    const [currentPage, setCurrentPage] = useState(5);
    const dispatch = useDispatch();
    const ticketData = useSelector((state) => state.ticket.data);

    useEffect(() => {
        dispatch(getTickets(currentPage, 10));
    }, []);
    const handleNext = () => {
        setCurrentPage(currentPage + 1);
        dispatch(getTickets(currentPage, 10));
    };
    const handlePrev = () => {
        if (currentPage === 1) return;
        setCurrentPage(currentPage - 1);
        dispatch(getTickets(currentPage, 10));
    };
    const handleChoose = (pageIndex) => {
        setCurrentPage(pageIndex);
        dispatch(getTickets(pageIndex, 10));
    };

    return (
        <div className={cx("table-container")}>
            <table className={cx("table-ticket")}>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Platenumber</th>
                        <th>Ticket Type</th>
                        <th>Ticket Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {ticketData !== undefined ? (
                        ticketData.result.map((ticket, index) => {
                            return (
                                <tr key={index}>
                                    <td>{ticket.ticketId}</td>
                                    <td>
                                        {ticket.plateNumber === "0" ||
                                        ticket.plateNumber === "null" ? (
                                            <FiAlertTriangle />
                                        ) : (
                                            ticket.plateNumber
                                        )}
                                    </td>
                                    <td>
                                        {ticket.ticketTypeId === 1 ? (
                                            <>
                                                Daily {"  "}
                                                <IoTicket color="green" />
                                            </>
                                        ) : (
                                            <IoTicket color="blue" />
                                        )}
                                    </td>
                                    <td>{ticket.ticketStatus}</td>
                                    <td>
                                        <button className={cx("btn-edit")}>
                                            Edit
                                        </button>
                                        <button className={cx("btn-delete")}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })
                    ) : (
                        <tr>
                            <td colSpan={5}>No data found</td>
                        </tr>
                    )}
                </tbody>
            </table>

            <NextAndPrevButton>
                <NextAndPrev
                    onNext={handleNext}
                    onPrev={handlePrev}
                    onChoose={handleChoose}
                    pageIndex={currentPage}
                />
            </NextAndPrevButton>
        </div>
    );
}
