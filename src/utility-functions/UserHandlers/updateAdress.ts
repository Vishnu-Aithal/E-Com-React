import axios from "axios";
import { HideLoader, ShowLoader } from "contexts/loader-context";
import { UserDispatch } from "contexts/user-context";
import { AddressType } from "types/Address";

export const updateAdress = async (
    updateAdress: AddressType,
    dispatch: UserDispatch,
    token: string,
    showLoader: ShowLoader,
    hideLoader: HideLoader
) => {
    showLoader("Updateing Address");
    try {
        const {
            data: { addresses },
        } = await axios.post(
            `/api/user/address/${updateAdress._id}`,
            { address: updateAdress },
            { headers: { authorization: token } }
        );
        dispatch({ type: "SET_ADDRESSES", payload: addresses });
    } catch (error) {
        return error;
    } finally {
        hideLoader();
    }
};
