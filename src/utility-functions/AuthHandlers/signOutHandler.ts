import { HideLoader, ShowLoader } from "contexts/loader-context";

export const signOutHandler = (
    showLoader: ShowLoader,
    hideLoader: HideLoader
) => {
    showLoader("Signing Out");
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setTimeout(hideLoader, 500);
};
