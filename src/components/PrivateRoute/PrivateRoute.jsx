import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
export default function PrivateRoute({ children }) {
    const isLogin = true;
    // localStorage.getItem("token") && localStorage.getItem("userData");
    return isLogin ? <>{children}</> : <Navigate to={"/login"} />;
}

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};
