import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "../assets/styles/CheckOutTicket.module.scss";
import InputField from "../components/InputField/InputField";
import upload_image from "../assets/svgs/upload_area.svg";
import img_df from "../assets/images/avatar_default.jpg";
import { useDispatch, useSelector } from "react-redux";
import { checkOutTicket, getTicketById } from "../features/ticket/ticketAction";
import { FILE } from "../config/ApiUrl";
import Loader from "../components/Loader/Loader";
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(styles);
export default function CheckoutTicket() {
    const [ticketId, setTicketId] = useState(null);
    const [plateNumber, setPlateNumber] = useState("");
    const [plateNumberImage, setPlateNumberImage] = useState(false);
    const dispatch = useDispatch();
    const ticketData = useSelector((state) => state.ticket.ticketData);
    const loading = useSelector((state) => state.ticket.loading);
    const isSuccss = useSelector((state) => state.ticket.success);

    const nagivate = useNavigate();
    const handleChangeTicketId = (value) => {
        if (value) {
            setTicketId(value);
            dispatch(getTicketById({ id: value }));
        }
        setTicketId(value);
    };
    const handlePlateNumber = (value) => {
        setPlateNumber(value);
        return;
    };

    console.log({ ticketId, plateNumber });
    const handleCheckoutTicket = () => {
        dispatch(
            checkOutTicket({
                id: ticketId,
                plNumber: plateNumber,
                img: ticketData.result ? ticketData.result.vehicleImage : "nan",
            })
        );
    };

    useEffect(() => {
        if (isSuccss) {
            setTicketId("");
            setPlateNumber("");
            setPlateNumberImage(false);
            nagivate("/bill");
        }
    }, [isSuccss, nagivate]);

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
                            onChangeValue={null}
                            value={
                                ticketData.result
                                    ? ticketData.result.issueDate
                                    : " "
                            }
                            label="Issue Date"
                            readonly={true}
                        />
                        <InputField
                            onChangeValue={null}
                            value={
                                ticketData.result
                                    ? ticketData.result.expiryDate
                                    : " "
                            }
                            label="Expired Date"
                            readonly={true}
                        />

                        <InputField
                            onChangeValue={null}
                            value={
                                ticketData.result
                                    ? ticketData.result.plateNumber
                                    : " "
                            }
                            label="Plate Number"
                            readonly={true}
                        />

                        <InputField
                            onChangeValue={null}
                            value={
                                ticketData.result
                                    ? ticketData.result.ticketTypeId === 1
                                        ? "Daily"
                                        : "Monthly"
                                    : " "
                            }
                            label="Ticket Type"
                            readonly={true}
                        />
                        <div className={cx("plateNumberImage")}>
                            <img
                                width={"80%"}
                                height={"200px"}
                                src={
                                    ticketData.result
                                        ? `${FILE.GET}?filePath=${ticketData.result.vehicleImage}`
                                        : img_df
                                }
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
                            <button
                                onClick={handleCheckoutTicket}
                                className={cx("checkout-btn")}
                            >
                                {loading ? <Loader /> : "Check out"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
