import { useAuth } from "contexts/auth-context";
import { useLoader } from "contexts/loader-context";
import { useToast } from "contexts/toast-context";
import { useUser } from "contexts/user-context";
import React, { ChangeEvent } from "react";
import { createPortal } from "react-dom";
import { AddressWithoutId } from "routes/CheckoutPage/CheckoutPage";
import { AddressType } from "types/Address";
import { addAddress, updateAdress } from "utility-functions/UserHandlers";
import classes from "./Address.module.css";

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
    return (
        <div
            id="address-modal"
            className={classes["address-modal"]}
            onClick={(e) =>
                (e.target as HTMLDivElement)?.id === "address-modal" &&
                setMode("close")
            }>
            <form
                className="p-4 w-fit text-center shadow-md-hover br-2 bg-white"
                action=""
                onSubmit={submitHandler}>
                <div className="input">
                    <input
                        className="input__field"
                        placeholder="Name"
                        type="text"
                        value={address.name}
                        onChange={(e) => handleChange(e, "name")}
                        required
                    />
                    <label className="input__float-label" htmlFor="name">
                        Name
                    </label>
                    <span className="input__required-text"></span>
                </div>
                <div className="input">
                    <input
                        className="input__field"
                        placeholder="Street Address"
                        type="text"
                        value={address.street}
                        onChange={(e) => handleChange(e, "street")}
                        required
                    />
                    <label className="input__float-label" htmlFor="name">
                        Street Address
                    </label>
                    <span className="input__required-text"></span>
                </div>
                <div className="input">
                    <input
                        className="input__field"
                        placeholder="City"
                        type="text"
                        value={address.city}
                        onChange={(e) => handleChange(e, "city")}
                        required
                    />
                    <label className="input__float-label" htmlFor="name">
                        City
                    </label>
                    <span className="input__required-text"></span>
                </div>
                <div className="input">
                    <input
                        className="input__field"
                        placeholder="State"
                        type="text"
                        value={address.state}
                        onChange={(e) => handleChange(e, "state")}
                        required
                    />
                    <label className="input__float-label" htmlFor="name">
                        State
                    </label>
                    <span className="input__required-text"></span>
                </div>
                <div className="input">
                    <input
                        className="input__field"
                        placeholder="Pin Code - 6 Digits"
                        type="number"
                        minLength={6}
                        maxLength={6}
                        value={address.pincode}
                        onChange={(e) => handleChange(e, "pincode")}
                        required
                    />
                    <label className="input__float-label" htmlFor="name">
                        Pin Code - 6 Digits
                    </label>
                    <span className="input__required-text"></span>
                </div>
                <div className="input">
                    <input
                        className="input__field"
                        placeholder="Phone Number - 10 Digits"
                        type="number"
                        minLength={10}
                        maxLength={10}
                        value={address.phone}
                        onChange={(e) => handleChange(e, "phone")}
                        required
                    />
                    <label className="input__float-label" htmlFor="name">
                        Phone Number - 10 Digits
                    </label>
                    <span className="input__required-text"></span>
                </div>
                {mode === "new" && (
                    <button
                        type="submit"
                        className="btn btn--primary br-1 mt-3"
                        disabled={!validityChecker(address)}>
                        Add Address
                    </button>
                )}
                {mode !== "new" && (
                    <button
                        type="submit"
                        className="btn btn--secondary br-1 mt-3"
                        disabled={!validityChecker(address)}>
                        Update Address
                    </button>
                )}
            </form>
        </div>
    );
};

export const AddressModal: React.FC<AddressEditorProps> = (props) => {
    return createPortal(
        <AddressEditor {...props} />,
        document.getElementById("address-modal") as HTMLDivElement
    );
};
