import { AddressEditor } from "components/Address/AddressEditor";
import { Address } from "components/Address/Address";
import { useUser } from "contexts/user-context";
import classes from "./CheckoutPage.module.css";
import { useState } from "react";
import { AddressType } from "types/Address";

export type AddressWithoutId = Omit<AddressType, "_id">;

export const emptyAddress = {
    name: "",
    city: "",
    phone: "",
    pincode: "",
    state: "",
    street: "",
};

export const CheckoutPage: React.FC = () => {
    const [newAddress, setNewAddress] =
        useState<AddressWithoutId>(emptyAddress);
    const [editorMode, setEditorMode] = useState<string | "new" | "close">(
        "close"
    );
    const {
        userState: { addresses },
    } = useUser();
    return (
        <div className={classes["checkout-container"]}>
            <div className={classes["checkout-address-container"]}>
                <h2>Select an Address for Delivery</h2>
                {addresses.length === 0 && (
                    <h4>No Address! Add New Address to select</h4>
                )}
                {addresses.map((address) => (
                    <Address
                        key={address._id}
                        address={address}
                        setAddress={setNewAddress}
                        setMode={setEditorMode}
                    />
                ))}
                <button
                    onClick={() => {
                        setEditorMode("new");
                        setNewAddress(emptyAddress);
                    }}
                    className="btn btn--secondary br-2">
                    Add Addres
                </button>
            </div>

            {editorMode !== "close" && (
                <AddressEditor
                    address={newAddress}
                    setAddress={setNewAddress}
                    mode={editorMode}
                    setMode={setEditorMode}
                />
            )}
        </div>
    );
};
