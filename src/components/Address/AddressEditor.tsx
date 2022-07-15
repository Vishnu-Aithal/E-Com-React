import { useAuth } from "contexts/auth-context";
import { useLoader } from "contexts/loader-context";
import { useToast } from "contexts/toast-context";
import { useUser } from "contexts/user-context";
import React, { ChangeEvent } from "react";
import { createPortal } from "react-dom";
import { AddressWithoutId } from "routes/CheckoutPage/CheckoutPage";
import { AddressType } from "types/Address";
import { addAddress, updateAdress } from "utility-functions/UserHandlers";
import { StyledAddressModal } from "./styled-Address";
import { MyInput } from "../Layout/MyInput";

interface AddressEditorProps {
    address: AddressWithoutId;
    setAddress: React.Dispatch<React.SetStateAction<AddressWithoutId>>;
    mode: "new" | string;
    setMode: React.Dispatch<React.SetStateAction<string | "new" | "close">>;
}

export const AddressEditor: React.FC<AddressEditorProps> = (props) => {
    const { address, setAddress, mode, setMode } = props;
    const validityChecker = (address: AddressWithoutId) => {
        if (address.pincode.length !== 6) {
            return false;
        }
        if (address.phone.length !== 10) {
            return false;
        }
        return true;
    };
    const { userDispatch } = useUser();
    const {
        authState: { token },
    } = useAuth();
    const { showLoader, hideLoader } = useLoader();
    const { showToast } = useToast();
    const handleChange = (
        e: ChangeEvent<HTMLInputElement>,
        field: keyof AddressType
    ) => {
        setAddress((address) => ({
            ...address,
            [field]: e.target.value,
        }));
    };

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let error: unknown;
        if (mode === "new") {
            error = await addAddress(
                address,
                userDispatch,
                token!,
                showLoader,
                hideLoader
            );
        } else {
            error = await updateAdress(
                { ...address, _id: mode },
                userDispatch,
                token!,
                showLoader,
                hideLoader
            );
        }
        if (error) {
            console.log(error);
            showToast({
                title: "Failed to Add New Adress",
                type: "error",
            });
        } else {
            showToast({
                title: "New Address Added",
                type: "success",
            });
            setAddress({
                city: "",
                name: "",
                phone: "",
                pincode: "",
                state: "",
                street: "",
            });
            setMode("close");
        }
    };
    const handleClickOutside: React.MouseEventHandler<HTMLDivElement> = (e) =>
        (e.target as HTMLDivElement)?.id === "address-modal" &&
        setMode("close");

    return (
        <StyledAddressModal id="address-modal" onClick={handleClickOutside}>
            <form
                className="p-6 w-fit text-center shadow-md-hover br-2 bg-white"
                action=""
                onSubmit={submitHandler}>
                <MyInput
                    label="Name"
                    type="text"
                    value={address.name}
                    onChange={(e) => handleChange(e, "name")}
                    required
                />
                <MyInput
                    label="Street Address"
                    type="text"
                    value={address.street}
                    onChange={(e) => handleChange(e, "street")}
                    required
                />
                <MyInput
                    label="City"
                    type="text"
                    value={address.city}
                    onChange={(e) => handleChange(e, "city")}
                    required
                />
                <MyInput
                    label="State"
                    type="text"
                    value={address.state}
                    onChange={(e) => handleChange(e, "state")}
                    required
                />

                <MyInput
                    label="Pin Code - 6 Digits"
                    type="number"
                    minLength={6}
                    maxLength={6}
                    value={address.pincode}
                    onChange={(e) => handleChange(e, "pincode")}
                    required
                />

                <MyInput
                    label="Phone Number - 10 Digits"
                    type="number"
                    minLength={10}
                    maxLength={10}
                    value={address.phone}
                    onChange={(e) => handleChange(e, "phone")}
                    required
                />
                <button
                    type="submit"
                    className={`btn btn--${
                        mode === "new" ? "primary" : "secondary"
                    } br-1 mt-3`}
                    disabled={!validityChecker(address)}>
                    {mode === "new" ? "Add Address" : "Update Address"}
                </button>
            </form>
        </StyledAddressModal>
    );
};

export const AddressModal: React.FC<AddressEditorProps> = (props) => {
    return createPortal(
        <AddressEditor {...props} />,
        document.getElementById("address-modal") as HTMLDivElement
    );
};
