import axios from "axios";
import { HideLoader, ShowLoader } from "contexts/loader-context";
import { UserDispatch } from "contexts/user-context";
import { AddressType } from "types/Address";

export const removeAdress = async (
    addressToRemove: AddressType,
    dispatch: UserDispatch,
    token: string,
    showLoader: ShowLoader,
    hideLoader: HideLoader
) => {
    showLoader("Removing Adress");
    try {
        const {
            data: { addresses },
        } = await axios.delete(`/api/user/address/${addressToRemove._id}`, {
            headers: { authorization: token },
        });
        dispatch({ type: "SET_ADDRESSES", payload: addresses });
    } catch (error) {
        return error;
    } finally {
        hideLoader();
    }
};
