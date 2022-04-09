import { useContext, createContext, useState } from "react";
import { v4 as uuid } from "uuid";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);
    const showToast = ({ title, description, type }) => {
        const dateTime = Date().substring(0, 25);
        const newToast = { _id: uuid(), title, description, type, dateTime };
        setToasts((toasts) => [...toasts, newToast]);
        setTimeout(
            () =>
                setToasts((toasts) =>
                    toasts.filter((toast) => toast._id !== newToast._id)
                ),
            3000
        );
    };
    const hideToast = (currentToast) =>
        setToasts((toasts) =>
            toasts.filter((toast) => toast._id !== currentToast._id)
        );

    return (
        <ToastContext.Provider value={{ toasts, showToast, hideToast }}>
            {children}
        </ToastContext.Provider>
    );
};

export const useToast = () => useContext(ToastContext);
