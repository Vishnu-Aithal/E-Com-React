import React, { useContext, createContext, useState } from "react";

interface LoaderContextValue {
    loader: Loader;
    showLoader: (text: string) => void;
    hideLoader: () => void;
}

interface Loader {
    state: "hidden" | "visible";
    text: string;
}

const LoaderContext = createContext<LoaderContextValue>({
    loader: { state: "hidden", text: "" },
    showLoader: (text: string) => {},
    hideLoader: () => {},
});

export const LoaderProvider: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    const [loader, setLoader] = useState<Loader>({ state: "hidden", text: "" });
    const showLoader = (text: string) => setLoader({ state: "visible", text });
    const hideLoader = () => setLoader({ state: "hidden", text: "" });
    return (
        <LoaderContext.Provider value={{ loader, showLoader, hideLoader }}>
            {children}
        </LoaderContext.Provider>
    );
};

export const useLoader = () => useContext(LoaderContext);
