import { useAuth } from "contexts/auth-context";
import { useCartWishlist } from "contexts/cart-wishlist-context";
import { useLoader } from "contexts/loader-context";
import { useToast } from "contexts/toast-context";
import { useUser } from "contexts/user-context";
import { useNavigate } from "react-router-dom";
import { AddressWithoutId } from "routes/CheckoutPage/CheckoutPage";
import { AddressType } from "types/Address";
import { clearCart } from "utility-functions/CartAndWishlistHandlers/clearCart";
import { addOrder } from "utility-functions/UserHandlers";
import classes from "./Address.module.css";

interface AddressProps {
    address: AddressType;
    setAddress: React.Dispatch<React.SetStateAction<AddressWithoutId>>;
    setMode: React.Dispatch<React.SetStateAction<string | "new" | "close">>;
}

export const Address: React.FC<AddressProps> = ({
    address,
    setAddress,
    setMode,
}) => {
    const {
        cartWishlistState: { cart },
        cartWishlistDispatch,
    } = useCartWishlist();
    const cartTotal = cart.reduce(
        (sum, { price, qty }) => sum + parseFloat(price) * qty,
        0
    );
    const noOfItems = cart.reduce((sum, { qty }) => sum + qty, 0);
    const deliveryCharges = noOfItems ? Math.max(200 - cartTotal * 0.01, 0) : 0;
    const TotalPrice = cartTotal + deliveryCharges;
    const navigate = useNavigate();
    const { userDispatch } = useUser();
    const {
        authState: { token },
    } = useAuth();
    const { hideLoader, showLoader } = useLoader();
    const { showToast } = useToast();
    return (
        <div
            onClick={async () => {
                const error = await addOrder(
                    {
                        address,
                        total: TotalPrice.toString(),
                        products: cart.map(({ title }) => title),
                    },
                    userDispatch,
                    token!,
                    showLoader,
                    hideLoader
                );
                if (error) {
                    showToast({
                        title: "Could not place order try after sometime",
                        type: "error",
                    });
                } else {
                    showToast({
                        title: "Order Placed Successfully",
                        description: "Arriving in 2 Days",
                        type: "success",
                    });
                    await clearCart(token!, cartWishlistDispatch);
                    navigate("/orders");
                }
            }}
            className={`${classes["address"]} p-4 text-center shadow-sm-hover w-100p`}>
            <h4>{address.name}</h4>
            <p>{address.street}</p>
            <p>{`${address.city} - ${address.pincode}`}</p>
            <p>{address.state}</p>
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    setMode(address._id);
                    setAddress({ ...address });
                }}
                className="btn bg-light-gray br-2 py-1 ms-auto">
                Edit
            </button>
        </div>
    );
};
