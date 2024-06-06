import React, { useEffect, useState } from "react";
import styles from "../../assets/styles/Role.module.scss";
import classNames from "classnames/bind";
import { useDispatch, useSelector } from "react-redux";
import { deleteRole, getAllRoles, updateRole } from "../../features/role/roleAction";
import EditRoleModal from "./EditRole";

const cx = classNames.bind(styles);

export default function RoleTable() {
  const isLoading = useSelector((state) => state.role.loading);
  const roleData = useSelector((state) => state.role.data);
  const dispatch = useDispatch();
  const [selectedRole, setSelectedRole] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(getAllRoles());
  }, [dispatch]);

  const handleEdit = (role) => {
    setSelectedRole(role);
    setIsModalOpen(true);
  };

  const handleDelete = (roleName) => {
    alert(`Bạn có chắc chắn xóa: ${roleName}`)
    dispatch(deleteRole(roleName))
    console.log(`Delete role name: ${roleName}`);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedRole(null);
  };

  const handleSave = (updatedRole) => {
    dispatch(updateRole(updatedRole));
    handleModalClose();
  };

  return (
    <div className={cx("container")}>
      {selectedRole && (
        <EditRoleModal
          isOpen={isModalOpen}
          onRequestClose={handleModalClose}
          data={selectedRole}
          onSave={handleSave}
        />
      )}
      <div className={cx("row")}>
        <div className={cx("col-md-12")}>
          <div className={cx("table-wrap")}>
            <table className={cx("custom-table")}>
              <thead>
                <tr>
                  <th>NO</th>
                  <th>Role Name</th>
                  <th>Normalized Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan={5}>Loading...</td>
                  </tr>
                ) : (
                  roleData.result &&
                  roleData.result.map((role, index) => (
                    <tr key={role.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{role.name}</td>
                      <td>{role.normalizedName}</td>
                      <td className={cx("action-buttons")}>
                        <button
                          onClick={() => handleEdit(role)}
                          className={cx("btn", "btn-success")}
                        >
                          EDIT
                        </button>
                        <button
                          onClick={() => handleDelete(role.name)}
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
