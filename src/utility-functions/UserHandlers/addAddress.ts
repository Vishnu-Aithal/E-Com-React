import axios from "axios";
import { HideLoader, ShowLoader } from "contexts/loader-context";
import { UserDispatch } from "contexts/user-context";
import { AddressType } from "types/Address";

export const addAddress = async (
    newAddress: Partial<AddressType>,
    dispatch: UserDispatch,
    token: string,
    showLoader: ShowLoader,
    hideLoader: HideLoader
) => {
    showLoader("Adding new Address");
    try {
        const {
            data: { addresses },
        } = await axios.post(
            "/api/user/address",
            { address: newAddress },
            { headers: { authorization: token } }
        );
        dispatch({ type: "SET_ADDRESSES", payload: addresses });
    } catch (error) {
        console.log(error);
        return error;
    } finally {
        hideLoader();
    }
};
