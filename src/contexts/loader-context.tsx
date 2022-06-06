import React, { useContext, createContext, useState, useCallback } from "react";
export type ShowLoader = (text: string) => void;
export type HideLoader = () => void;
interface LoaderContextValue {
    loader: Loader;
    showLoader: ShowLoader;
    hideLoader: HideLoader;
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
    const showLoader = useCallback(
        (text: string) => setLoader({ state: "visible", text }),
        []
    );
    const hideLoader = useCallback(
        () => setLoader({ state: "hidden", text: "" }),
        []
    );
    return (
        <LoaderContext.Provider value={{ loader, showLoader, hideLoader }}>
            {children}
        </LoaderContext.Provider>
    );
};

export const useLoader = () => useContext(LoaderContext);
