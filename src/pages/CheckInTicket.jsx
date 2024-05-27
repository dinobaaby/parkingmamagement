import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "../assets/styles/CheckInTicket.module.scss";
import upload_image from "../assets/svgs/upload_area.svg";
import { useDispatch, useSelector } from "react-redux";
import { checkInTicket } from "../features/ticket/ticketAction";
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(styles);
export default function CheckInTicket() {
    const [plateNumber, setPlateNumber] = useState("");
    const [plateNumberImage, setPlateNumberImage] = useState(false);
    const [onPlatefocus, setOnPlatefocus] = useState(false);
    const dispatch = useDispatch();
    const nagivate = useNavigate();
    const ticket = useSelector((state) => state.ticket.ticketData);
    const handleCheckIn = () => {
        const formData = new FormData();
        formData.append("file", plateNumberImage);
        dispatch(checkInTicket({ plateNumber, formdata: formData }));
    };
    useEffect(() => {}, [ticket, nagivate]);

    return (
        <div className={cx("checkin-page")}>
            <div className={cx("checkin-container")}>
                <div className={cx("header")}>
                    <h2>Check In Ticket 🎟️</h2>
                </div>
                <div className={cx("body")}>
                    <div className={cx("form-platenumber")}>
                        <label
                            className={cx(
                                `${
                                    plateNumber || onPlatefocus
                                        ? "has-content"
                                        : ""
                                }`
                            )}
                            htmlFor="email"
                        >
                            Plate number
                        </label>
                        <input
                            name="email"
                            onFocus={() => setOnPlatefocus(true)}
                            onBlur={() => setOnPlatefocus(false)}
                            value={plateNumber}
                            onChange={(e) => setPlateNumber(e.target.value)}
                            type="text"
                        />
                    </div>
                    <div className={cx("form-image")}>
                        <label htmlFor="file-input">
                            <img
                                className={cx("ticket-img")}
                                style={{
                                    width: plateNumberImage ? "100%" : "100px",
                                    height: plateNumberImage
                                        ? "350px"
                                        : "100px",
                                    objectFit: "cover",
                                }}
                                src={
                                    plateNumberImage
                                        ? URL.createObjectURL(plateNumberImage)
                                        : upload_image
                                }
                            />
                        </label>
                        <input
                            name="image"
                            id="file-input"
                            hidden
                            type="file"
                            onChange={(e) =>
                                setPlateNumberImage(e.target.files[0])
                            }
                        />
                    </div>
                </div>
                <div className={cx("footer")}>
                    <button onClick={handleCheckIn}>Check In</button>
                </div>
            </div>
        </div>
    );
}
