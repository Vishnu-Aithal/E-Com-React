import {
    createContext,
    PropsWithChildren,
    useContext,
    useReducer,
} from "react";
import { FilterActions } from "reducer-functions/FilterReducer/FilterActionTypes";
import {
    filterReducerFunction,
    initialState,
    FilterState,
} from "reducer-functions/FilterReducer/filterReducer";

interface FilterContextValue {
    filterState: FilterState;
    filterDispatch: React.Dispatch<FilterActions>;
}

const FilterContext = createContext<FilterContextValue>({
    filterState: initialState,
    filterDispatch: () => {},
});

const FilterProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [filterState, filterDispatch] = useReducer(
        filterReducerFunction,
        initialState
    );
    return (
        <FilterContext.Provider value={{ filterState, filterDispatch }}>
            {children}
        </FilterContext.Provider>
    );
};

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };
