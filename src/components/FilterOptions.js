import { useFilter } from "contexts/filter-context";
import { useEffect } from "react";

export const FilterOptions = ({}) => {
    const {
        filterState: {
            data: { fromServer: products },
            filters,
            sorters,
        },
        filterDispatch: dispatch,
    } = useFilter();
    const getMaxMinPrice = (products) => {
        const prices = products.map((product) => parseFloat(product.price));
        const maxPrice = Math.ceil(Math.max(...prices) / 100) * 100;
        const minPrice = Math.floor(Math.min(...prices) / 100) * 100;
        return { maxPrice, minPrice };
    };
    const { maxPrice, minPrice } = getMaxMinPrice(products);
    useEffect(() => dispatch({ type: "PROCESS" }), [filters, sorters]);
    return (
        <aside className="filter">
            <div className="filter__header m-2">
                <h4 className="heading-xs text-bold">Filters</h4>
                <p
                    className="filter__clear ms-auto"
                    onClick={() => dispatch({ type: "CLEAR_FILTERS" })}>
                    Clear
                </p>
            </div>
            <div className="filter__price m-2">
                <h4 className="heading-xs text-bold">Price</h4>
                <input
                    className="filter__price-slider"
                    type="range"
                    min={minPrice}
                    max={maxPrice}
                    list="price-steps"
                    value={filters.priceRange || maxPrice}
                    onChange={(e) =>
                        dispatch({
                            type: "SET_PRICE_RANGE",
                            payload: e.target.value,
                        })
                    }
                />
                <datalist id="price-steps">
                    <option value={minPrice} label={minPrice}></option>
                    <div className="text-bold text-md">
                        {filters.priceRange ?? maxPrice}
                    </div>
                    <option value={maxPrice} label={maxPrice}></option>
                </datalist>
            </div>
            <div className="filter__category m-2">
                <h4 className="heading-xs text-bold">Category</h4>
                <label className="">
                    <input
                        type="checkbox"
                        onChange={() =>
                            dispatch({
                                type: "CATEGORY",
                                payload: "sports",
                            })
                        }
                        checked={filters.category.includes("sports")}
                    />{" "}
                    Sports
                </label>
                <label className="">
                    <input
                        type="checkbox"
                        onChange={() =>
                            dispatch({
                                type: "CATEGORY",
                                payload: "casual",
                            })
                        }
                        checked={filters.category.includes("casual")}
                    />{" "}
                    Casual
                </label>
                <label className="">
                    <input
                        type="checkbox"
                        onChange={() =>
                            dispatch({
                                type: "CATEGORY",
                                payload: "formal",
                            })
                        }
                        checked={filters.category.includes("formal")}
                    />{" "}
                    Formal
                </label>
            </div>
            <div className="filter__category m-2">
                <h4 className="heading-xs text-bold">Brand</h4>
                <label className="">
                    <input
                        type="checkbox"
                        onChange={() =>
                            dispatch({
                                type: "BRAND",
                                payload: "hike",
                            })
                        }
                        checked={filters.brand.includes("hike")}
                    />{" "}
                    Hike
                </label>
                <label className="">
                    <input
                        type="checkbox"
                        onChange={() =>
                            dispatch({
                                type: "BRAND",
                                payload: "adibas",
                            })
                        }
                        checked={filters.brand.includes("adibas")}
                    />{" "}
                    Adibas
                </label>
                <label className="">
                    <input
                        type="checkbox"
                        onChange={() =>
                            dispatch({
                                type: "BRAND",
                                payload: "woodsky",
                            })
                        }
                        checked={filters.brand.includes("woodsky")}
                    />{" "}
                    WoodSky
                </label>
            </div>
            <div className="filter__category m-2">
                <h4 className="heading-xs text-bold">Type</h4>
                <label className="">
                    <input
                        type="checkbox"
                        onChange={() =>
                            dispatch({
                                type: "TYPE",
                                payload: "shoes",
                            })
                        }
                        checked={filters.type.includes("shoes")}
                    />{" "}
                    Shoes
                </label>
                <label className="">
                    <input
                        type="checkbox"
                        onChange={() =>
                            dispatch({
                                type: "TYPE",
                                payload: "pant",
                            })
                        }
                        checked={filters.type.includes("pant")}
                    />{" "}
                    Pant
                </label>
                <label className="">
                    <input
                        type="checkbox"
                        onChange={() =>
                            dispatch({
                                type: "TYPE",
                                payload: "shirt",
                            })
                        }
                        checked={filters.type.includes("shirt")}
                    />{" "}
                    Shirt
                </label>
            </div>
            <div className="filter__rating m-2">
                <h4 className="heading-xs text-bold">Rating</h4>
                <label className="">
                    <input
                        type="radio"
                        name="filter-rating"
                        checked={filters.rating === 4}
                        onChange={() =>
                            dispatch({ type: "SET_RATING", payload: 4 })
                        }
                    />{" "}
                    4 Stars & Above
                </label>
                <label className="">
                    <input
                        type="radio"
                        name="filter-rating"
                        checked={filters.rating === 3}
                        onChange={() =>
                            dispatch({ type: "SET_RATING", payload: 3 })
                        }
                    />{" "}
                    3 Stars & Above
                </label>
                <label className="">
                    <input
                        type="radio"
                        name="filter-rating"
                        checked={filters.rating === 2}
                        onChange={() =>
                            dispatch({ type: "SET_RATING", payload: 2 })
                        }
                    />{" "}
                    2 Stars & Above
                </label>
                <label className="">
                    <input
                        type="radio"
                        name="filter-rating"
                        checked={filters.rating === 1}
                        onChange={() =>
                            dispatch({ type: "SET_RATING", payload: 1 })
                        }
                    />{" "}
                    1 Stars & Above
                </label>
            </div>
            <div className="filter__sort m-2">
                <h4 className="heading-xs text-bold">Sort By Price</h4>
                <label className="">
                    <input
                        type="radio"
                        name="price-sort"
                        checked={sorters.byPrice === "low-to-high"}
                        onChange={() =>
                            dispatch({
                                type: "SORT_BY_PRICE",
                                payload: "low-to-high",
                            })
                        }
                    />{" "}
                    Price - Low to High
                </label>
                <label className="">
                    <input
                        type="radio"
                        name="price-sort"
                        checked={sorters.byPrice === "high-to-low"}
                        onChange={() =>
                            dispatch({
                                type: "SORT_BY_PRICE",
                                payload: "high-to-low",
                            })
                        }
                    />{" "}
                    Price - High to Low
                </label>
            </div>
            <div className="filter__sort m-2">
                <h4 className="heading-xs text-bold">Sort By Rating</h4>
                <label className="">
                    <input
                        type="radio"
                        name="rating-sort"
                        checked={sorters.byRating === "low-to-high"}
                        onChange={() =>
                            dispatch({
                                type: "SORT_BY_RATING",
                                payload: "low-to-high",
                            })
                        }
                    />{" "}
                    Rating - Low to High
                </label>
                <label className="">
                    <input
                        type="radio"
                        name="rating-sort"
                        checked={sorters.byRating === "high-to-low"}
                        onChange={() =>
                            dispatch({
                                type: "SORT_BY_RATING",
                                payload: "high-to-low",
                            })
                        }
                    />{" "}
                    Rating - High to Low
                </label>
            </div>
        </aside>
    );
};
