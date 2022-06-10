import { Product } from "types/Product";

interface LoadData {
    type: "LOAD_DATA";
    payload: Product[];
}

interface NoPayloadActions {
    type: "PROCESS" | "CLEAR_FILTERS" | "SHOW_OUT_OF_STOCK";
}
interface StringPayloadActions {
    type: "SET_SEARCH_TERM" | "SET_PRICE_RANGE" | "CATEGORY" | "BRAND" | "TYPE";
    payload: string;
}

interface SetRating {
    type: "SET_RATING";
    payload: number;
}

interface SortPayloadActions {
    type: "SORT_BY_RATING" | "SORT_BY_PRICE";
    payload: "high-to-low" | "low-to-high";
}

export type FilterActions =
    | LoadData
    | NoPayloadActions
    | StringPayloadActions
    | SetRating
    | SortPayloadActions;
