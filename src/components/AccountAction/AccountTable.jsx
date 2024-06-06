import React, { useEffect } from "react";
import styles from "../../assets/styles/Account.module.scss";
import classNames from "classnames/bind";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { getAllAccounts } from "../../features/account/accountAction";

const cx = classNames.bind(styles);

export default function AccountTable() {
  const isLoading = useSelector((state) => state.account.loading);
  const accountData = useSelector((state) => state.account.data);
  const dispatch = useDispatch();
  const [selectedAccount, setSelectedAccount] = useState(null);

  useEffect(() => {
    dispatch(getAllAccounts());
  }, [dispatch]);

  const handleEdit = () => {};

  const handleDelete = () => {};

  return (
    <div className={cx("container")}>
      <div className={cx("row")}>
        <div className={cx("col-md-12")}>
          <div className={cx("table-wrap")}>
            <table className={cx("custom-table")}>
              <thead>
                <tr>
                  <th>NO</th>
                  <th>User Name</th>
                  <th>Email</th>
                  <th>Phone number</th>
                  <th>Card ID</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan={5}>Loading...</td>
                  </tr>
                ) : (
                  accountData.result &&
                  accountData.result.map((account, index) => (
                    <tr key={account.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{account.userName}</td>
                      <td>{account.email}</td>
                      <td>{account.phoneNumber}</td>
                      <td>{account.cardId}</td>
                      <td className={cx("action-buttons")}>
                        <button
                          onClick={() => handleEdit(account)}
                          className={cx("btn", "btn-success")}
                        >
                          EDIT
                        </button>
                        <button
                          onClick={() => handleDelete(account.name)}
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
