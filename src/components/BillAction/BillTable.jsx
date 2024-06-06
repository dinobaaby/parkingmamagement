import React, { useEffect, useState } from "react";
import styles from "../../assets/styles/Bill.module.scss";
import classNames from "classnames/bind";
import { useDispatch, useSelector } from "react-redux";
import { deleteBill, getAllBill, getBillByID, getBillByPlateNumber } from "../../features/bill/billAction"
import { dateFormater } from "../../utils";

const cx = classNames.bind(styles);

export default function BillTable() {
  const isLoading = useSelector((state) => state.bill.loading);
  const billData = useSelector((state) => state.bill.data);
  const dispatch = useDispatch();
  const [selectedBill, setSelectedBill] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(getAllBill());
  }, [dispatch]);

  const handleEdit = (bill) => {
    setSelectedBill(bill);
    setIsModalOpen(true);
  };

  const handleDelete = (billID) => {
    alert(`Bạn có chắc chắn xóa: ${billID}`)
    dispatch(deleteBill(billID))
    console.log(`Delete bill ID: ${billID}`);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedBill(null);
  };

  const handleSave = (updatedBill) => {
    handleModalClose();
  };

  return (
    <div className={cx("container")}>
      <div className={cx("row")}>
        <div className={cx("col-md-12")}>
          <div className={cx("table-wrap")}>
            <table className={cx("custom-table")}>
              <thead>
                <tr>
                  <th>NO</th>
                  <th>Bill ID</th>
                  <th>Plate Number</th>
                  <th>Time In</th>
                  <th>Time Out</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan={5}>Loading...</td>
                  </tr>
                ) : (
                  billData.result &&
                  billData.result.map((bill, index) => (
                    <tr key={bill.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{bill.billId}</td>
                      <td>{bill.ticketId}</td>
                      <td>{bill.plateNumber}</td>
                      <td>{dateFormater(bill.timeIn)}</td>
                      <td>{dateFormater(bill.timeOut)}</td>
                      <td className={cx("action-buttons")}>
                        <button
                          onClick={() => handleEdit(bill)}
                          className={cx("btn", "btn-success")}
                        >
                          MORE
                        </button>
                        <button
                          onClick={() => handleDelete(bill.billId)}
                          className={cx("btn", "btn-danger")}
                        >
                          DELETE
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
