import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ToastCustomContainer = ({ message }) => (
    <ToastContainer
        autoClose={3000}
        position={"top-right"}
        closeOnClick={true}
        hideProgressBar={false}
        newestOnTop={true}
        rtl={false}
    />
)

export default toast;