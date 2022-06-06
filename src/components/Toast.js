import { useToast } from "contexts/toast-context";
import { useState, useEffect } from "react";

const Toast = ({
    toastData = {
        _id: "",
        title: title,
        description: description,
        type: "success",
    },
    hideToast,
}) => {
    const types = {
        success: "clr-green",
        warning: "clr-yellow",
        error: "clr-red",
    };

    const [startFade, setStartFade] = useState(false);

    const { title, description, type, dateTime } = toastData;

    useEffect(() => {
        const fadeAfterTwoSec = setTimeout(() => setStartFade(true), 2000);
        return () => clearTimeout(fadeAfterTwoSec);
    }, []);

    return (
        <div
            className={`toast toast--show br-1 shadow-sm clr-white ${
                startFade ? "toast--fade" : ""
            } ${types[type]}`}>
            <div className="toast__header p-2">
                <h4 className="toast__title">{title}</h4>
                <p className="toast__time text-gray text-sm ms-auto">
                    {dateTime}
                </p>
                <div
                    className="toast__dismiss clr-black ms-2"
                    onClick={() => hideToast(toastData)}>
                    <i className="fas fa-times-circle"></i>
                </div>
            </div>
            <div className="toast__body text-md p-2">{description}</div>
        </div>
    );
};

export const ToastContainer = () => {
    const { toasts, hideToast } = useToast();
    return (
        <div
            className={`toast__container ${
                toasts.length !== 0 ? "toast__container--show" : ""
            }`}>
            {toasts.map((toast) => (
                <Toast
                    key={toast._id}
                    toastData={toast}
                    hideToast={hideToast}
                />
            ))}
        </div>
    );
};
