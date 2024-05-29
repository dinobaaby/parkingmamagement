import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "../assets/styles/Role.module.scss";
import InputField from "../components/InputField/InputField";
import { Button } from "@mui/material";
const cx = classNames.bind(styles);

export default function Role() {
    const [roleName, setRoleName] = useState("");
    const handleChangeRoleName = (value) => {
        setRoleName(value);
    };
    return (
        <div className={cx("role-page")}>
            <div className={cx("create-role")}>
                <InputField
                    label={"Role name"}
                    onChangeValue={handleChangeRoleName}
                    value={roleName}
                />
                <button className={cx("btn-create")}>Create</button>
            </div>
            <div></div>
        </div>
    );
}
