import React from "react";
import classNames from "classnames/bind";
import styles from "./NextAndPrev.module.scss";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

export default function NextAndPrev({ pageIndex, onNext, onPrev, onChoose }) {
    return (
        <>
            {pageIndex > 1 ? (
                <div className={cx("prev-btn")}>
                    <button onClick={onPrev}>Prev</button>
                </div>
            ) : (
                <></>
            )}
            <div className={cx("pagaNumber")}>
                {pageIndex >= 4 ? (
                    Array.from({ length: 2 }, (_, i) => i + pageIndex - 2).map(
                        (item, index) => {
                            return (
                                <button
                                    onClick={() => onChoose(item)}
                                    className={cx("pageIndex")}
                                    key={index}
                                >
                                    {item}
                                </button>
                            );
                        }
                    )
                ) : (
                    <></>
                )}
            </div>
            <div className={cx("next-btn")}>
                <button onClick={onNext}>Next</button>
            </div>
        </>
    );
}

NextAndPrev.propTypes = {
    pageIndex: PropTypes.number,
    onNext: PropTypes.func,
    onPrev: PropTypes.func,
    onChoose: PropTypes.func,
};
