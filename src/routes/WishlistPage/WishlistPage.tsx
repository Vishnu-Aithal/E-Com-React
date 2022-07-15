import { Card } from "components/Card/Index";
import { useCartWishlist } from "contexts/cart-wishlist-context";
import { StyledWishlistPage } from "./styled-WhislistPage";

export const WishlistPage = () => {
    const {
        cartWishlistState: { wishlist },
    } = useCartWishlist();

    return (
        <StyledWishlistPage.Content>
            <StyledWishlistPage.CardContainer>
                {wishlist.length === 0 && (
                    <h3 className="w-100p text-center">
                        {" "}
                        Add Items to Wishlist to view it Here
                    </h3>
                )}
                {wishlist.map((item) => (
                    <Card key={item._id} productData={item} type="wishlist" />
                ))}
            </StyledWishlistPage.CardContainer>
        </StyledWishlistPage.Content>
    );
};
