import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "../assets/styles/CheckOutTicket.module.scss";
import InputField from "../components/InputField/InputField";
import upload_image from "../assets/svgs/upload_area.svg";
import img_df from "../assets/images/avatar_default.jpg";
const cx = classNames.bind(styles);
export default function CheckoutTicket() {
    const [ticketId, setTicketId] = useState("");
    const [plateNumber, setPlateNumber] = useState("");
    const [plateNumberImage, setPlateNumberImage] = useState(false);

    const handleChangeTicketId = (value) => {
        setTicketId(value);
    };
    const handlePlateNumber = (value) => {
        setPlateNumber(value);
    };

    return (
        <div className={cx("checkout-page")}>
            <div className={cx("checkout-container")}>
                <div className={cx("header")}>
                    <h2>Check Out Ticket 🎟️</h2>
                </div>
                <div className={cx("body")}>
                    <div className={cx("ticket-data")}>
                        <div className={cx("ticket-data-header")}>
                            <h2>Ticket info</h2>
                        </div>
                        <InputField
                            onChangeValue={handleChangeTicketId}
                            value={ticketId}
                            label="Ticket ID"
                        />
                        <InputField
                            onChangeValue={handleChangeTicketId}
                            value={ticketId}
                            label="Issue Date"
                        />
                        <InputField
                            onChangeValue={handleChangeTicketId}
                            value={ticketId}
                            label="Expired Date"
                        />

                        <InputField
                            onChangeValue={handleChangeTicketId}
                            value={ticketId}
                            label="Plate Number"
                        />

                        <InputField
                            onChangeValue={handleChangeTicketId}
                            value={ticketId}
                            label="Ticket Type"
                        />
                        <div className={cx("plateNumberImage")}>
                            <img
                                width={"80%"}
                                height={"200px"}
                                src={img_df}
                                alt="upload"
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>

                    <div className={cx("ticket-check")}>
                        <div className={cx("ticket-check-header")}>
                            <h2>Ticket info</h2>
                        </div>
                        <InputField
                            onChangeValue={handlePlateNumber}
                            value={plateNumber}
                            label="Plate Number"
                        />
                        <div className={cx("form-image")}>
                            <label htmlFor="file-input">
                                <img
                                    className={cx("ticket-img")}
                                    style={{
                                        width: plateNumberImage
                                            ? "100%"
                                            : "100px",
                                        height: plateNumberImage
                                            ? "350px"
                                            : "100px",
                                        objectFit: "cover",
                                    }}
                                    src={
                                        plateNumberImage
                                            ? URL.createObjectURL(
                                                  plateNumberImage
                                              )
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
                        <div className={cx("footer")}>
                            <button className={cx("checkout-btn")}>
                                CheckOut
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
