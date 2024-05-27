import React from "react";
import classNames from "classnames/bind";
import styles from "../assets/styles/Area.module.scss";
const cx = classNames.bind(styles);
export default function Area() {
    return (
        <div className={cx("area-page")}>
            <div className={cx("notice-board")}></div>
            <div className={cx("area-map")}>
                <div className={cx("first-line")}>
                    <div>0</div>
                    <div>1</div>
                </div>
                <div className={cx("second-line")}>
                    <div className={cx("col-1")}>
                        <div>
                            <div>2</div>
                            <div>3</div>
                        </div>
                        <div></div>
                    </div>
                    <div className={cx("col-2")}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className={cx("col-3")}></div>
                    <div className={cx("col-4")}>
                        <div>5</div>
                        <div>6</div>
                        <div>7</div>
                    </div>
                </div>
            </div>
            <div className={cx("area-info")}>
                <h2>Area Info</h2>
                <div className={cx("area-info-data")}>
                    <span>Area Name</span>
                    <span>Area Type</span>
                    <span>Area Capacity</span>
                    <span>Area Status</span>
                </div>
            </div>
        </div>
    );
}
