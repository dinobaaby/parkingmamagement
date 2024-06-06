import React, { useState } from "react";

import classNames from "classnames/bind";
import styles from "./EditTicket.module.scss";
import InputField from "../InputField/InputField";
import PropTypes from "prop-types";

import { useSelector } from "react-redux";
import { dateFormater } from "../../utils";
const cx = classNames.bind(styles);

export default function EditTicket({ data, ...rest }) {
  const [ticketStatus, setTicketStatus] = useState(data.ticketStatus);
  const [ticketTypeId, setTicketTypeId] = useState(data.ticketTypeId);
  const [plateNumber, setPlateNumber] = useState(data.plateNumber);
  const dateIn = dateFormater(data.issueDate);
  const dateOut = dateFormater(data.expiryDate);
  const [issueDate, setIssueDate] = useState(dateIn);
  const [expiryDate, setExpiryDate] = useState(dateOut);
  const [slotId, setSlotId] = useState(data.slotId);
  const [vehicleImage, setVehicleImage] = useState(data.vehicleImage);

  const handleChangeIssueDate = (value) => {
    setIssueDate(value);
  };
  const handleChangeTicketStatus = (value) => {
    setTicketStatus(value);
  };
  const handleChangeTicketType = (value) => {
    setTicketTypeId(value);
  };
  const handleChangePlateNumber = (value) => {
    setPlateNumber(value);
  };
  const handleChangeExpiryDate = (value) => {
    setExpiryDate(value);
  };
  const handleChangeSlot = (value) => {
    setSlotId(value);
  };

  const handleChangeImage = (value) => {
    setVehicleImage(value);
  };
  console.log({
    ticketStatus,
    ticketTypeId,
    plateNumber,
    issueDate,
    expiryDate,
    slotId,
    vehicleImage,
  });

  console.log({ data });

  return (
    <div className={cx("ticket-form-edit")}>
      <div>
        <InputField label={"Ticket Id"} value={data.ticketId} readonly={true} />
        <InputField
          label={"Ticket Status"}
          value={ticketStatus}
          onChangeValue={handleChangeTicketStatus}
        />
      </div>
      <div>
        <InputField
          label={"Issued Date"}
          onChangeValue={handleChangeIssueDate}
          value={issueDate}
          type="date"
        />
        <InputField
          label={"Expired Date"}
          onChangeValue={handleChangeExpiryDate}
          value={expiryDate}
          type="date"
        />
      </div>
      <div>
        <InputField
          label={"Ticket Type"}
          value={ticketTypeId}
          onChangeValue={handleChangeTicketType}
        />
        <InputField
          label={"Platenumber"}
          value={plateNumber}
          onChangeValue={handleChangePlateNumber}
        />
      </div>
      <div>
        <InputField
          label={"Slot"}
          value={slotId}
          onChangeValue={handleChangeSlot}
        />
        <InputField
          label={"Vehicle Image"}
          value={vehicleImage}
          onChangeValue={handleChangeImage}
          type="file"
        />
      </div>
      <button className={cx("btn-save")}>Save</button>
    </div>
  );
}

EditTicket.propTypes = {
  data: PropTypes.object.isRequired,
};
