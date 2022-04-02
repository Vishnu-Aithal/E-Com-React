export const CartInfo = ({ cart = [] }) => {
    const cartTotal = cart.reduce(
        (sum, { price, qty }) => sum + parseFloat(price) * qty,
        0
    );
    const noOfItems = cart.reduce((sum, { qty }) => sum + qty, 0);
    const deliveryCharges = noOfItems ? Math.max(200 - cartTotal * 0.01, 0) : 0;
    return (
        <div className="cart-info bg-light-gray br-2 p-3 m-3 shadow-xs">
            <h3 className="cart-info__header pb-2 m-2">PRICE DETAILS</h3>
            <div className="cart-info__breakup">
                <p className="cart-info__item d-flex m-2">
                    No. Of Items <span className="ms-auto">{noOfItems}</span>
                </p>
                <p className="cart-info__item d-flex m-2">
                    Total Price <span className="ms-auto">{cartTotal}</span>
                </p>
                <p className="cart-info__item d-flex m-2">
                    Delivery Charges{" "}
                    <span className="ms-auto">{deliveryCharges}</span>
                </p>
                <p className="cart-info__total pt-2 d-flex m-2 text-bold">
                    Total Amount{" "}
                    <span className="ms-auto">
                        {cartTotal + deliveryCharges}
                    </span>
                </p>
            </div>
            <button className="btn btn--primary w-100p m-2 br-1">
                Checkout
            </button>
        </div>
    );
};
