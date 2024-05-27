import React from "react";
import { Bounce, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

export default function Role() {
    const notify = () =>
        toast("🦄 Wow so easy!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce, // Corrected the transition property
        });

    return (
        <div>
            <h1>Role</h1>
            <button onClick={notify}>Notify!</button>
        </div>
    );
}
