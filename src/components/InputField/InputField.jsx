import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./InputField.module.scss";
const cx = classNames.bind(styles);
import PropTypes from "prop-types";
import { FILE } from "../../config/ApiUrl";
import upload_image from "../../assets/svgs/upload_area.svg";
export default function InputField({
    label,
    value,
    onChangeValue = null,
    readonly = false,
    type = "text",
}) {
    const [onFocus, setOnFocus] = useState(false);
    return type === "file" ? (
        <div className={cx("form-image")}>
            <label htmlFor={cx("file-input")}>
                <img
                    className={cx("ticket-img")}
                    style={{
                        width: "100px",
                        height: "100%",
                        objectFit: "cover",
                    }}
                    src={
                        value
                            ? typeof value === "object" &&
                              value instanceof File &&
                              value.type.startsWith("image/") // Check file type
                                ? URL.createObjectURL(value)
                                : typeof value === "string" &&
                                  value.startsWith("http") // Check if value is a valid URL
                                ? value
                                : `${FILE.GET}?filePath=${value}`
                            : upload_image
                    }
                />
            </label>
            <input
                name="image"
                id={cx("file-input")}
                hidden
                type="file"
                onChange={(e) => onChangeValue(e.target.files[0])}
            />
        </div>
    ) : (
        <div className={cx("form-group")}>
            <label
                className={cx(`${value || onFocus ? "has-content" : ""}`)}
                htmlFor="filed"
            >
                {label}
            </label>
            <input
                id="filed"
                name="filed"
                onFocus={() => setOnFocus(true)}
                onBlur={() => setOnFocus(false)}
                value={value}
                onChange={(e) => {
                    if (type === "file") {
                        onChangeValue(e.target.files[0]);
                        return;
                    }
                    onChangeValue(e.target.value);
                }}
                type={type}
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
    type: PropTypes.string,
};
