export const initialState = {
    data: {
        fromServer: [],
        processed: [],
    },
    filters: {
        showOutOfStock: true,
        brand: [],
        type: [],
        category: [],
        rating: undefined,
        priceRange: undefined,
    },
    sorters: { byPrice: undefined, byRating: undefined },
};

export const filterReducerFunction = (filterState, { type, payload }) => {
    const processor = ({ data: { fromServer }, filters, sorters }) => {
        let processed = [...fromServer];
        if (filters.priceRange) {
            processed = processed.filter(
                ({ price }) => parseInt(price) <= filters.priceRange
            );
        }
        if (filters.rating) {
            processed = processed.filter(
                ({ rating }) => parseInt(rating) >= filters.rating
            );
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
            processed = processed.filter(({ type }) =>
                filters.type.includes(type)
            );
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
                    ? product2.price - product1.price
                    : product1.price - product2.price
            );
        }
        return processed;
    };

    const removeFromArray = (element, array) => {
        const newArray = [...array];
        newArray.splice(array.indexOf(element), 1);
        return newArray;
    };

    const { data, filters, sorters } = filterState;

    switch (type) {
        case "LOAD_DATA":
            return {
                ...filterState,
                data: {
                    fromServer: payload,
                    processed: payload,
                },
            };
        case "PROCESS":
            return {
                ...filterState,
                data: { ...data, processed: processor(filterState) },
            };
        case "SET_PRICE_RANGE":
            return {
                ...filterState,
                filters: { ...filters, priceRange: parseInt(payload) },
            };
        case "SET_RATING":
            return {
                ...filterState,
                filters: { ...filters, rating: payload },
            };
        case "SHOW_OUT_OF_STOCK":
            return {
                ...filterState,
                filters: {
                    ...filters,
                    showOutOfStock: !filters.showOutOfStock,
                },
            };
        case "CATEGORY":
            return {
                ...filterState,
                filters: {
                    ...filters,
                    category: filters.category.includes(payload)
                        ? removeFromArray(payload, filters.category)
                        : [...filters.category, payload],
                },
            };
        case "BRAND":
            return {
                ...filterState,
                filters: {
                    ...filters,
                    brand: filters.brand.includes(payload)
                        ? removeFromArray(payload, filters.brand)
                        : [...filters.brand, payload],
                },
            };
        case "TYPE":
            return {
                ...filterState,
                filters: {
                    ...filters,
                    type: filters.type.includes(payload)
                        ? removeFromArray(payload, filters.type)
                        : [...filters.type, payload],
                },
            };
        case "SORT_BY_PRICE":
            return {
                ...filterState,
                sorters: { ...sorters, byPrice: payload },
            };
        case "SORT_BY_RATING":
            return {
                ...filterState,
                sorters: { ...sorters, byRating: payload },
            };
        case "CLEAR_FILTERS":
            return {
                ...initialState,
                data: { ...data, processed: data.fromServer },
            };
        default:
            return filterState;
    }
};
