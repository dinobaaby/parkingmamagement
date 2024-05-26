import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "../assets/styles/CreateTicket.module.scss";
import { TICKET_API } from "../config/ApiUrl";

const cx = classNames.bind(styles);

export default function CreateTicket() {
    const [ticketStatus, setTicketStatus] = useState(0);
    const [ticketType, setTicketType] = useState(0);
    const [issueDate, setIssueDate] = useState(
        new Date().toISOString().split("T")[0]
    ); // Use ISO format for consistent API handling
    const [expiryDate, setExpiryDate] = useState(
        new Date().toISOString().split("T")[0]
    );
    const [slotId, setSlotId] = useState(1);
    const [plateNumber, setPlateNumber] = useState("");
    const [imageFile, setImageFile] = useState(null);

    const handleCreateTicket = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("TicketId", 0);
        formData.append("TicketStatus", ticketStatus);
        formData.append("TicketTypeId", ticketType);
        formData.append("IssueDate", issueDate);
        formData.append("ExpiryDate", expiryDate);
        formData.append("SlotId", slotId);
        formData.append("VehicleImage", "aaa");
        formData.append("PlateNumber", plateNumber);
        formData.append("file", imageFile);

        if (imageFile) {
            formData.append("VehicleImage", imageFile);
        }

        try {
            const response = await fetch(TICKET_API.CREATE, {
                method: "POST",
                body: formData,
            });

            if (!response.status === 200) {
                throw new Error(
                    `Error creating ticket: ${response.statusText}`
                );
            }

            const data = await response.json();
            console.log(data);
            console.log("Ticket created successfully:", data); // Handle success (e.g., display confirmation message)
        } catch (error) {
            console.error("Error creating ticket:", error); // Handle errors (e.g., display error message)
        }
    };

    return (
        <div className={cx("create-ticket-page")}>
            <div className={cx("header")}>
                <span>Create Ticket</span>
            </div>
            <div className={cx("form-body")}>
                <div className={cx("ticket-field-status-type")}>
                    <div>
                        <select
                            value={ticketStatus}
                            onChange={(e) => setTicketStatus(e.target.value)}
                        >
                            <option value={0}>
                                -- Choose ticket status --
                            </option>
                            <option value={1}>NotUse</option>
                            <option value={2}>Used</option>
                        </select>
                    </div>
                    <div>
                        <select
                            value={ticketType}
                            onChange={(e) => setTicketType(e.target.value)}
                        >
                            <option value={0}>-- Choose ticket type --</option>
                            <option value={1}>Daily</option>
                            <option value={2}>Monthly</option>
                        </select>
                    </div>
                </div>
                <div className={cx("ticket-field")}>
                    <label
                        className={cx(`${issueDate ? "has-content" : ""}`)}
                        htmlFor="issuedate"
                    >
                        IssueDate
                    </label>
                    <input
                        name="issuedate"
                        value={issueDate}
                        onChange={(e) => setIssueDate(e.target.value)}
                        type="date"
                    />
                </div>
                <div className={cx("ticket-field")}>
                    <label
                        className={cx(`${expiryDate ? "has-content" : ""}`)}
                        htmlFor="expireDate"
                    >
                        Expiry Date
                    </label>
                    <input
                        name="expiryDate"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                        type="date"
                    />
                </div>
                <div className={cx("ticket-field")}>
                    <label
                        className={cx(`${slotId ? "has-content" : ""}`)}
                        htmlFor="slotId"
                    >
                        Slot Id
                    </label>
                    <input
                        name="slotId"
                        value={slotId}
                        onChange={(e) => setSlotId(e.target.value)}
                        type="number"
                    />
                </div>

                <div className={cx("ticket-field")}>
                    <label
                        className={cx(`${plateNumber ? "has-content" : ""}`)}
                        htmlFor="plateNumber"
                    >
                        Plate Number
                    </label>
                    <input
                        name="plateNumber"
                        value={plateNumber}
                        onChange={(e) => setPlateNumber(e.target.value)}
                        type="text"
                    />
                </div>
                <div className={cx("ticket-field")}>
                    <input
                        name="fileimage"
                        type="file"
                        onChange={(e) => setImageFile(e.target.files[0])}
                    />
                </div>
                <div className={cx("create-btn")}>
                    <button onClick={handleCreateTicket}>Create</button>
                </div>
            </div>
        </div>
    );
}
