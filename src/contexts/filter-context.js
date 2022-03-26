import { createContext, useContext, useReducer } from "react";
import {
    filterReducerFunction,
    initialState,
} from "reducer-functions/filterFunction";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
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
