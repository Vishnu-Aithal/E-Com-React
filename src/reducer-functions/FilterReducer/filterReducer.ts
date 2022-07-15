import { Product } from "types/Product";
import { FilterActions } from "./FilterActionTypes";
import { processor } from "./processor";

export interface FilterState {
    data: {
        fromServer: Product[];
        processed: Product[];
    };
    filters: {
        showOutOfStock: boolean;
        brand: string[];
        type: string[];
        category: string[];
        rating: number | null;
        priceRange: number | null;
        searchTerm: string;
    };
    sorters: {
        byPrice: null | "high-to-low" | "low-to-high";
        byRating: null | "high-to-low" | "low-to-high";
    };
}

export const initialState: FilterState = {
    data: {
        fromServer: [],
        processed: [],
    },
    filters: {
        showOutOfStock: true,
        brand: [],
        type: [],
        category: [],
        rating: null,
        priceRange: null,
        searchTerm: "",
    },
    sorters: { byPrice: null, byRating: null },
};

export const filterReducerFunction = (
    filterState: FilterState,
    action: FilterActions
): FilterState => {
    const { type } = action;
    const removeFromArray = (element: string, array: string[]) => {
        const newArray = [...array];
        newArray.splice(array.indexOf(element), 1);
        return newArray;
    };

    const { data, filters } = filterState;

    switch (type) {
        case "LOAD_DATA":
            return {
                ...filterState,
                data: {
                    fromServer: action.payload,
                    processed: action.payload,
                },
            };
        case "PROCESS":
            return {
                ...filterState,
                data: { ...data, processed: processor(filterState) },
            };
        case "SET_SEARCH_TERM":
            return {
                ...filterState,
                filters: { ...filters, searchTerm: action.payload },
            };
        case "SET_PRICE_RANGE":
            return {
                ...filterState,
                filters: { ...filters, priceRange: parseInt(action.payload) },
            };
        case "SET_RATING":
            return {
                ...filterState,
                filters: { ...filters, rating: action.payload },
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
                    category: filters.category.includes(action.payload)
                        ? removeFromArray(action.payload, filters.category)
                        : [...filters.category, action.payload],
                },
            };
        case "BRAND":
            return {
                ...filterState,
                filters: {
                    ...filters,
                    brand: filters.brand.includes(action.payload)
                        ? removeFromArray(action.payload, filters.brand)
                        : [...filters.brand, action.payload],
                },
            };
        case "TYPE":
            return {
                ...filterState,
                filters: {
                    ...filters,
                    type: filters.type.includes(action.payload)
                        ? removeFromArray(action.payload, filters.type)
                        : [...filters.type, action.payload],
                },
            };
        case "SORT_BY_PRICE":
            return {
                ...filterState,
                sorters: { byPrice: action.payload, byRating: null },
            };
        case "SORT_BY_RATING":
            return {
                ...filterState,
                sorters: { byPrice: null, byRating: action.payload },
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
