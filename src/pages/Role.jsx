import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "../assets/styles/Role.module.scss";
import InputField from "../components/InputField/InputField";
import RoleTable from "../components/RoleAction/RoleTable";
import { useDispatch } from "react-redux";
import { createRole } from "../features/role/roleAction";

const cx = classNames.bind(styles);

export default function Role() {
  const [roleName, setRoleName] = useState("");
  const dispatch = useDispatch();

  const handleChangeRoleName = (value) => {
    setRoleName(value);
  };

  const handleSubmitCreate = () => {
    dispatch(createRole(roleName));
    setRoleName("");
  };
  return (
    <div className={cx("role-page")}>
      <div className={cx("create-role")}>
        <InputField
          label={"Role name"}
          onChangeValue={handleChangeRoleName}
          value={roleName}
        />
        <button onClick={handleSubmitCreate} className={cx("btn-create")}>
          Create
        </button>
      </div>
      <RoleTable />
    </div>
  );
}
