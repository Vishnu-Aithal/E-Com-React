import { FilterState } from "./filterReducer";

export const processor = ({
    data: { fromServer },
    filters,
    sorters,
}: FilterState) => {
    let processed = [...fromServer];
    if (filters.searchTerm) {
        const searchTermsArray = filters.searchTerm
            .split(" ")
            .filter((_) => _ !== "");
        processed = processed.filter(({ title }) => {
            const titleWithoutSpaces = title.replaceAll(" ", "").toLowerCase();

            for (const word of searchTermsArray) {
                if (!titleWithoutSpaces.includes(word)) return false;
            }
            return true;
        });
    }
    if (filters.priceRange !== null) {
        const priceRange = filters.priceRange;
        processed = processed.filter(
            ({ price }) => parseInt(price) <= priceRange
        );
    }
    if (filters.rating !== null) {
        const ratingSet = filters.rating;
        processed = processed.filter(({ rating }) => rating >= ratingSet);
    }
    if (!filters.showOutOfStock) {
        processed = processed.filter(({ outOfStock }) => !outOfStock);
    }
    if (filters.category.length) {
        processed = processed.filter(({ category }) =>
            filters.category.includes(category)
        );
    }
    if (filters.brand.length) {
        processed = processed.filter(({ brand }) =>
            filters.brand.includes(brand)
        );
    }
    if (filters.type.length) {
        processed = processed.filter(({ type }) => filters.type.includes(type));
    }

    if (sorters.byRating) {
        processed = processed.sort((product1, product2) =>
            sorters.byRating === "high-to-low"
                ? product2.rating - product1.rating
                : product1.rating - product2.rating
        );
    }
    if (sorters.byPrice) {
        processed = processed.sort((product1, product2) =>
            sorters.byPrice === "high-to-low"
                ? +product2.price - +product1.price
                : +product1.price - +product2.price
        );
    }
    return processed;
};
