import { useFilter } from "contexts/filter-context";
import React, { SetStateAction, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import axios from "axios";
import classes from "./SearchModal.module.css";
const SearchModalComponent: React.FC<{
    searchMode: boolean;
    setSearchMode: React.Dispatch<SetStateAction<boolean>>;
}> = ({ searchMode, setSearchMode }) => {
    const [search, setSearchTerm] = useState("");
    const {
        filterDispatch,
        filterState: {
            data: { processed },
            filters: { searchTerm },
        },
    } = useFilter();
    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("/api/products");
                filterDispatch({
                    type: "LOAD_DATA",
                    payload: response.data.products,
                });
            } catch (error) {}
        })();
    }, [filterDispatch]);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (search) {
            timerRef.current = setTimeout(() => {
                filterDispatch({
                    type: "SET_SEARCH_TERM",
                    payload: search,
                });
            }, 500);
        }
        return () => clearTimeout(timerRef.current!);
    }, [search, filterDispatch]);

    useEffect(() => {
        filterDispatch({ type: "PROCESS" });
    }, [searchTerm, filterDispatch]);
    return (
        <div
            id="search-modal-outside"
            className={classes["search-modal"]}
            onClick={(e) =>
                (e.target as HTMLDivElement).id === "search-modal-outside" &&
                setSearchMode(false)
            }>
            <div className={classes["search-body"]}>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                {search && (
                    <ul>
                        {processed.map((product) => (
                            <li>{product.title}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export const SearchModal: React.FC<{
    searchMode: boolean;
    setSearchMode: React.Dispatch<SetStateAction<boolean>>;
}> = (props) => {
    return createPortal(
        <SearchModalComponent {...props} />,
        document.getElementById("search-modal") as HTMLDivElement
    );
};
