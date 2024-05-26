import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./InputField.module.scss";
const cx = classNames.bind(styles);
import PropTypes from "prop-types";
export default function InputField({
    label,
    value,
    onChangeValue,
    readonly = false,
}) {
    const [onFocus, setOnFocus] = useState(false);
    return (
        <div className={cx("form-group")}>
            <label
                className={cx(`${value || onFocus ? "has-content" : ""}`)}
                htmlFor="email"
            >
                {label}
            </label>
            <input
                name="email"
                onFocus={() => setOnFocus(true)}
                onBlur={() => setOnFocus(false)}
                value={value}
                onChange={(e) => onChangeValue(e.target.value)}
                type="text"
                readOnly={readonly}
            />
        </div>
    );
}

InputField.propTypes = {
    value: PropTypes.string,
    onChangeValue: PropTypes.func,
    label: PropTypes.string,
    readonly: PropTypes.bool,
};
