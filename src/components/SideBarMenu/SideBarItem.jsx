import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
export default function SideBarItem({ item, onActive, isChoose }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            {item.submenu ? (
                <>
                    <li
                        className={`parent-submenu ${
                            isChoose ? "menu-item-active" : ""
                        }`}
                        onClick={() => setIsOpen((prev) => !prev)}
                    >
                        <span>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: "15px",
                                }}
                            >
                                {item.icon}
                                <span>{item.name}</span>
                            </div>
                            {item.submenu && item.submenu.length > 0 && (
                                <Link to={item.link}>
                                    <span className="arrow">
                                        {isOpen ? (
                                            <IoIosArrowDown />
                                        ) : (
                                            <IoIosArrowForward />
                                        )}
                                    </span>
                                </Link>
                            )}
                        </span>
                    </li>
                    {item.submenu &&
                        (isOpen ? (
                            <ul className="submenu">
                                {item.submenu.map((subitem, index) => {
                                    return (
                                        <Link to={subitem.link} key={index}>
                                            <li onClick={onActive}>
                                                {subitem.name}
                                            </li>
                                        </Link>
                                    );
                                })}
                            </ul>
                        ) : (
                            <></>
                        ))}
                </>
            ) : (
                <li
                    className={`${isChoose ? "menu-item-active" : ""}`}
                    onClick={onActive}
                >
                    <Link to={item.link} style={{ textDecoration: "none" }}>
                        {item.icon}
                        <span>{item.name}</span>
                    </Link>
                </li>
            )}
        </>
    );
}

SideBarItem.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        link: PropTypes.string,
        icon: PropTypes.node.isRequired,
        submenu: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                link: PropTypes.string.isRequired,
            })
        ),
    }).isRequired,
    onActive: PropTypes.func.isRequired,
    isChoose: PropTypes.bool.isRequired,
};
